package ru.splincode.garden;

public class AppleTreeFactory extends GardenTreeFactory {
    public GardenTree createTree(int ageTree) {
        AppleTree appleTree = new AppleTree(ageTree);
        return appleTree;
    }
}