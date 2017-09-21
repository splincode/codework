package ru.splincode.garden;

class CherryTree extends GardenTree {

	final static private int maxAge = 30;
	final static private String nameTree = "Вишня";

	CherryTree(int currentAge) {
		super(currentAge, CherryTree.maxAge, CherryTree.nameTree);
	}

	public String getName() {
		return CherryTree.nameTree;
	}


}