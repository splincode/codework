#include "graph.h"

template <typename T>
Vertex<T>* Vertex<T>::each(int i, int count){
    i = count - i;

    Vertex<T> *it = new Vertex<T>();
    it = this;

    for(int j=1; j<i; j++){
        it = it->next;
    }

    return  it;
}

template <typename T>
void Graph<T>::addElement(char _name, T _value){

   for(int i=0; i<count; i++) {
      if((VertexList->each(i, count)->elem->name) == _name)
          throw ConctructionError("This name already exists");
   }


   V<T> *element = (struct V<T> *)malloc(sizeof(struct V<T>));
   element->name = _name;
   element->value = _value;

   Vertex<T>* tempthis = new Vertex<T>();

   if(VertexList == NULL){
       tempthis = new Vertex<T>();
       tempthis->next = NULL;
       tempthis->elem = element;
       tempthis->visited = false;
    } else {
       tempthis->next = VertexList;
       tempthis->elem = element;
       tempthis->visited = false;
   }

    tempthis->elem->linklist = NULL;
    count++;
    VertexList = tempthis;

}

template <typename T>
void Graph<T>::outputvertex(){

    Vertex<T> *it = new Vertex<T>();
    it = VertexList;

    for(int i=0; i<count; i++){
        cout << (it->each(i, count))->elem->name;
        if((i+1) != count) cout << " ";
    }

}


template <typename T>
void Graph<T>::edge(char at, char to){
    Vertex<T> *it = new Vertex<T>();
    it = VertexList;

    int num_at = 0, num_to = 0;

    for(int i=0; i<count; i++){
      if ((it->each(i, count)->elem->name) == at) num_at = i;
      if ((it->each(i, count)->elem->name) == to) num_to = i;
    }


    ListNumberVertex *itt =  it->each(num_at, count)->elem->linklist;

    while(itt){
        if((itt->num) == num_to) throw ConctructionError("The vertex is already connected");
        itt=itt->next;
    }



    // ДЛЯ ПЕРВОЙ ВЕРШИНЫ
    ListNumberVertex *link = VertexList->each(num_at, count)->elem->linklist;
    ListNumberVertex *temp = (struct ListNumberVertex *)malloc(sizeof(struct ListNumberVertex));

    if (link == NULL){
        link = (struct ListNumberVertex *)malloc(sizeof(struct ListNumberVertex));
        link->next = NULL;
        link->num = num_to;
    } else {
        temp->next = link;
        temp->num = num_to;
        link = temp;
    }

    VertexList->each(num_at, count)->elem->linklist = link;


    // ДЛЯ ВТОРОЙ ВЕРШИНЫ
    link = VertexList->each(num_to, count)->elem->linklist;
    temp = (struct ListNumberVertex *)malloc(sizeof(struct ListNumberVertex));

    if (link == NULL){
        link = (struct ListNumberVertex *)malloc(sizeof(struct ListNumberVertex));
        link->next = NULL;
        link->num = num_at;
    } else {
        temp->next = link;
        temp->num = num_at;
        link = temp;
    }


    VertexList->each(num_to, count)->elem->linklist = link;
}

template <typename T>
void Graph<T>::bfs(){

    ListNumberVertex *itt;

    cout << "BFS: ";
    for(int i=0; i<count; i++){

        ListNumberVertex *itt =  VertexList->each(i, count)->elem->linklist;
        if(VertexList->each(i, count)->visited == false){
            if(i!=0) cout << "->";
            cout << VertexList->each(i, count)->elem->name;

            while(itt){
                if (VertexList->each(itt->num, count)->visited == false){
                    cout  << "->" << VertexList->each(itt->num, count)->elem->name;
                    VertexList->each(itt->num, count)->visited = true;
                }
                itt=itt->next;
            }

            VertexList->each(i, count)->visited = true;
        }

    }

    for(int i=0; i<count; i++) VertexList->each(i, count)->visited = false;

}


template <typename T>
void Graph<T>::dfs(){
    ListNumberVertex *itt;

    cout << "DFS: ";

    for(int i=0; i<count; i++){
        ListNumberVertex *itt =  VertexList->each(i, count)->elem->linklist;
        if(VertexList->each(i, count)->visited == false){

            cout << VertexList->each(i, count)->elem->name;

            VertexList->each(i, count)->visited = true;

            while(itt){
                if((VertexList->each(itt->num, count)->visited) == false) {

                    cout << "->" << VertexList->each(itt->num, count)->elem->name;

                    ListNumberVertex *ittt =  VertexList->each(itt->num, count)->elem->linklist;
                    while(ittt){


                        VertexList->each(itt->num, count)->visited = true;

                        if((VertexList->each(ittt->num, count)->visited) == false) {
                                cout << "->";
                                cout << VertexList->each(ittt->num, count)->elem->name;
                                VertexList->each(ittt->num, count)->visited = true;

                                ListNumberVertex *itttt =  VertexList->each(ittt->num, count)->elem->linklist;


                                while(itttt){

                                    if((VertexList->each(itttt->num, count)->visited) == false) {

                                    cout << "->" << VertexList->each(itttt->num, count)->elem->name;
                                    VertexList->each(itttt->num, count)->visited = true;

                                    }
                                    itttt = itttt->next;
                                }
                        }

                        ittt=ittt->next;
                    }

                    itt = itt->next;


                }

            }


        }


    }

    for(int i=0; i<count; i++) VertexList->each(i, count)->visited = false;
}

template <typename T>
void Graph<T>::output(){
    Vertex<T> *it = new Vertex<T>();
    it = VertexList;
    int j=0;
    int num = 0;

    cout << endl << "graph { " << endl;
    for(int i=0; i<count; i++){
        ListNumberVertex *itt =  it->each(i, count)->elem->linklist;

        cout << " ";

        cout << it->each(i, count)->elem->name;
        cout << " -> ";

        while(itt){

                if (j != 0) cout << " -- ";
                cout << it->each(itt->num, count)->elem->name;

            num = itt->num;
            itt=itt->next;
            j++;
        }

        j=0;

        cout << endl;
    }

    cout << "}" << endl;


}

template <typename T>
T Graph<T>::getValue(char name){
    for(int i=0; i<count; i++) {
        if((VertexList->each(i, count)->elem->name) == name)
            return VertexList->each(i, count)->elem->value;
    }
}
