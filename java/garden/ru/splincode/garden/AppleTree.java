package ru.splincode.garden;

class AppleTree extends GardenTree {

	final static private int maxAge = 100;
	final static private String nameTree = "Яблоня";

	AppleTree(int currentAge) {
		super(currentAge, AppleTree.maxAge, AppleTree.nameTree);
	}


	public String getName() {
		return AppleTree.nameTree;
	}

}