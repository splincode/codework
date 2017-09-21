package ru.splincode.garden;

class PearTree extends GardenTree {

	final static private int maxAge = 80;
	final static private String nameTree = "Груша";

	PearTree(int currentAge) {
		super(currentAge, PearTree.maxAge, PearTree.nameTree);
	}


	public String getName() {
		return PearTree.nameTree;
	}


}