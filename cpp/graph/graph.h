#include <iostream>
using namespace std;

class ConctructionError{
private:
    string mess;
public:
    ConctructionError(const string& mess) : mess(mess) {
    }
     string const &getMess() const {
        return mess;
    }
};

struct ListNumberVertex {
    int num;
    ListNumberVertex* next;
};

template <typename T>
struct V {
    char name;
    T value;

    // список номеров {1, 2, 4, 5, 7}
    ListNumberVertex* linklist;
};

template <typename T>
struct Vertex {
    bool visited;
    V<T> *elem;
    Vertex *next;

    // обращение к списку по индексу list.each(0) ~ list[0]
    Vertex* each(int i, int count);
};

template <class T>
class Graph {

    int count;
    Vertex<T> *VertexList = new Vertex<T>();

public:
    Graph():VertexList(NULL), count(0){}
    ~Graph(){delete VertexList;}

    // добавление элементы
    void addElement(char _name, T _value);

    // вывод списка вершин
    void outputvertex();

    // связывание вершин ребром
    void edge(char at, char to);

    // обход в ширину
    void bfs();

    // обход в глубину
    void dfs();

    // удобный вывод на экран
    void output();

    // получение значения вершины
    T getValue(char name);

};
