package ru.splincode.garden;

public class PearTreeFactory extends GardenTreeFactory {
    public GardenTree createTree(int ageTree) {
        PearTree pearTree = new PearTree(ageTree);
        return pearTree;
    }
}