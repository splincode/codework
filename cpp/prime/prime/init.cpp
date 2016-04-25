bool init(int argc, char *argv[]){
    if (argc != 3 && argv[1] != "-n") {
        return 0;
    } else return 1;
}
