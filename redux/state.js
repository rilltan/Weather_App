let initialState = {
  bottomTabsActive: true,

  children: {
    "f9725f5f-788e-445f-8fdf-933306cc8b9f": {
      name: "Amanda Smith",
      age: 5,
      limit: 30,
      img: "https://img.freepik.com/premium-photo/little-blonde-girl-straw-hat-near-flowering-tree_106368-732.jpg?w=2000",
      stats: {
        tangram: {
          currentRating: 1570,
          ratingHistoryBy10Days: [
            1480, 1490, 1500, 1510, 1520, 1530, 1540, 1550, 1560, 1570,
          ],
          ranking: 102938,
          percentile: 79,
          gamesPlayed: 10,
          averageTimePerPuzzleInSeconds: 65,
        },
      },
      filteredGames: ["Matching Shapes", "Tangram", "Equations", "CodeCars"],
    },
    "2d0b4e39-e31d-4b4c-a0cf-6c32b4b79b72": {
      name: "Jane Doe",
      age: 6,
      limit: 40,
      img: "",
      filteredGames: ["Matching Shapes", "Numbers"],
    },
    "0e420c46-6ec6-4e16-935e-a452a8b0f368": {
      name: "Johnny Smith",
      age: 8,
      limit: 60,
      img: "https://cdn.pixabay.com/photo/2021/04/05/12/38/boy-6153294_1280.jpg",
      filteredGames: ["Matching Shapes", "Tangram", "Numbers"],
    },
  },

  games: [
    {
      name: "Matching Shapes",
      imageUrl: "assets/images/games_images/tangram.png",
      info: "Match the Shape in the corresponding box! When there multiple shapes, place each shape into its cutout!",
      purchased: false,
      price: "2.99",
      category: "logic",
      ageRangeStart: 3,
      ageRangeEnd: 5,
      piece: "Shape Piece",
    },
    {
      name: "Tangram",
      imageUrl: "assets/images/games_images/tangram.png",
      info: "Tangram! Insert each piece one by one into the cutout, until it fits perfectly.",
      purchased: true,
      price: "2.99",
      category: "logic",
      ageRangeStart: 6,
      ageRangeEnd: 12,
      piece: "Shape Piece",
    },
    {
      name: "Equations",
      imageUrl: "assets/images/games_images/tangram.png",
      info: "Place the numbers in each blank! Make sure all the equations add up!",
      purchased: true,
      price: "2.99",
      category: "math",
      ageRangeStart: 3,
      ageRangeEnd: 5,
      piece: "Number Blocks",
    },
    {
      name: "CodeCars",
      imageUrl: "assets/images/games_images/tangram.png",
      info: "Code your way through the maze and lead Cody to the right destination!",
      purchased: false,
      price: "2.99",
      category: "logic",
      ageRangeStart: 6,
      ageRangeEnd: 12,
      piece: "CodeBlocks",
    },
  ],
};

export default initialState;
