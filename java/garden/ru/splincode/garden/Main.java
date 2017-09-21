package ru.splincode.garden;

public class Main {
    public static void main(String[] args) {

        int maxTreeInGarden = 20;
        GardenTree gardenTrees[] = getGardenTrees(maxTreeInGarden);
        showInformationByGardenTrees(gardenTrees);

    }

    public static int random(int max) {
        return (int)(Math.random() * ++max);
    }

    public static GardenTree[] getGardenTrees(int maxTreeInGarden) {

        GardenTreeFactory varietyOfTrees[] = {
            new AppleTreeFactory(),
            new CherryTreeFactory(),
            new PearTreeFactory()
        };


        int maxIndexStorageGarden = varietyOfTrees.length - 1;
        GardenTree gardenTrees[] = new GardenTree[maxTreeInGarden];

        for (int i = 0; i < maxTreeInGarden; i++) {
            GardenTreeFactory variety = varietyOfTrees[random(maxIndexStorageGarden)];
            int currentAge = random(100);

            GardenTree tree = variety.createTree(currentAge);
            gardenTrees[i] = tree;
        }

        return gardenTrees;

    }

    public static void showInformationByGardenTrees(GardenTree gardenTrees[]) {

        int index = 1;

        for (GardenTree tree: gardenTrees) {
            System.out.print("№" + (index++) + ", ");
            System.out.print("сорт: " + tree.getName() + ", ");
            System.out.print("возраст: " + tree.getAge() + " лет, ");

            if (tree.freePlant()) {
                System.out.println("пригодно для пересадки");
            } else {
                System.out.println("не пригодно для пересадки");
            }
        }
    }

}