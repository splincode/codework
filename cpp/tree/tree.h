#include <iostream>
#include <string>
#include <sstream>

namespace patch
{
    template < typename T > std::string to_string( const T& n )
    {
        std::ostringstream stm ;
        stm << n ;
        return stm.str() ;
    }
}

using namespace std;

template <typename T>
struct Vertex {
    bool visited;
    char id;
    int left = -1;
    int right = -1;
    T val;
    Vertex *next;
    Vertex *each(int i, int count){
        i = count - i;

        Vertex *it = new Vertex();
        it = this;

        for(int j=1; j<i; j++){
            it = it->next;
        }

        return  it;
    }
};

template <typename T>
class Tree {
    int now;
    int count;
    Vertex<T> *VertexList = new Vertex<T>();

public:
    Tree(char parent, T value):VertexList(NULL), count(0){

        Vertex<T>* tempthis = new Vertex<T>();
        tempthis->next = NULL;
        tempthis->id = parent;
        tempthis->val = value;
        tempthis->visited = false;
        tempthis->left = -1;
        tempthis->right = -1;

        count++;
        VertexList = tempthis;

    }

    Tree& node(char id){

        for(int i=0; i<count; i++) {
            if((VertexList->each(i, count)->id) == id){
                now = i;
            }
         }

        return *this;
    }

    Tree& left(char name, T value){
        for(int i=0; i<count; i++) {
            if((VertexList->each(i, count)->id) == name){
                return *this; // вызываем ошибку
            }
         }

        Vertex<T>* tempthis = new Vertex<T>();
        tempthis->next = VertexList;
        tempthis->id = name;
        tempthis->val = value;
        tempthis->visited = false;
        tempthis->left = -1;
        tempthis->right = -1;

        count++;
        VertexList = tempthis;

        int to = 0;
        for(int i=0; i<count; i++) {
            if((VertexList->each(i, count)->id) == name){
                to = i;
            }
        }

       VertexList->each(now, count)->left = to;

       return *this;
    }

    Tree& right(char name, T value){
        for(int i=0; i<count; i++) {
            if((VertexList->each(i, count)->id) == name){
                return *this; // вызываем ошибку
            }
         }

        Vertex<T>* tempthis = new Vertex<T>();
        tempthis->next = VertexList;
        tempthis->id = name;
        tempthis->val = value;
        tempthis->visited = false;
        tempthis->left = -1;
        tempthis->right = -1;

        count++;
        VertexList = tempthis;

        int to = 0;
        for(int i=0; i<count; i++) {
            if((VertexList->each(i, count)->id) == name){
                to = i;
            }
        }

       VertexList->each(now, count)->right = to;

       return *this;
    }

    string output(){
        string text = "";
        int k = 0;

        for(int i=0; i<count; i++) {

            T val = VertexList->each(i, count)->val;
            string str = patch::to_string(val);

            text += std::string("[")
                    + std::string("\"")
                    + VertexList->each(i, count)->id
                    + std::string("\"") + ", "
                    + std::string("\"") + str
                    + std::string("\"") + ", [";

            if (VertexList->each(i, count)->left != -1){
                k = VertexList->each(i, count)->left;

                val = VertexList->each(k, count)->val;
                string str = patch::to_string(val);

                text +=  "[" + std::string("\"") + VertexList->each(k, count)->id  + std::string("\"") + ", "
                         + std::string("\"") + str  + std::string("\"") + "],";

            } else {
               text += std::string("\"") + "false" + std::string("\"") + ", ";
            }

            if (VertexList->each(i, count)->right != -1){
                k = VertexList->each(i, count)->right;

                val = VertexList->each(k, count)->val;
                string str = patch::to_string(val);

                text +=  "[" + std::string("\"") + VertexList->each(k, count)->id  + std::string("\"") + ", "
                         + std::string("\"") + str  + std::string("\"") + "]";
            } else {
                text +=  std::string("\"") + "false" + std::string("\"");
            }


            text += "]]";
            if ((i+1) != count) text += "||";

         }

        return text;
    }


    ~Tree(){}


};
