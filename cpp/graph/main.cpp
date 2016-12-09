#include <iostream>
#include "graph.cpp"

using namespace std;
int main(){

    Graph<int> g;
    try {

        g.addElement('A', 2);
        g.addElement('B', 3);
        g.addElement('C', 4);
        g.addElement('D', 5);
        g.addElement('E', 6);
        g.addElement('F', 7);
        g.addElement('G', 10);
        g.addElement('H', 15);
        g.addElement('I', 7);
        g.addElement('J', 8);


        cout << "Vertex [";
        g.outputvertex();
        cout << "]" << endl;

        g.edge('A', 'B');
        g.edge('A', 'C');
        g.edge('E', 'C');
        g.edge('E', 'I');
        g.edge('B', 'J');
        g.edge('D', 'F');
        g.edge('F', 'A');
        g.edge('H', 'A');
        g.edge('G', 'A');



        g.output();

        cout << endl; g.dfs();
        cout << endl; g.bfs();
        cout << endl << "G = " << g.getValue('G');
    } catch(ConctructionError err){
         cout << err.getMess() << endl;
    };

    return 0;
}
