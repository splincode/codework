package ru.splincode.garden;

class GardenTree {

	private int currentAge;
	final private static int maxAgeForPlanting = 25;


	GardenTree(int currentAge, int maxAge, String nameTree) {
		this.currentAge = currentAge;
	}

	public String getName() {
		return "Садовое дерево";
	}

	public int getAge() {
		return this.currentAge;
	}

	public Boolean freePlant() {
		return this.currentAge < GardenTree.maxAgeForPlanting ? true : false;
	}

}