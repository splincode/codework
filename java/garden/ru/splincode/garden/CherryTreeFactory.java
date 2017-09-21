package ru.splincode.garden;

public class CherryTreeFactory extends GardenTreeFactory {
    public GardenTree createTree(int ageTree) {
        CherryTree cherryTree = new CherryTree(ageTree);
        return cherryTree;
    }
}