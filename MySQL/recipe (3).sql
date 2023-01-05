-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 20, 2022 at 06:01 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `CID` int(5) NOT NULL,
  `RecipeID` int(5) NOT NULL,
  `UserID` int(5) NOT NULL,
  `UserName` varchar(60) NOT NULL,
  `Comments` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`CID`, `RecipeID`, `UserID`, `UserName`, `Comments`) VALUES
(1, 1, 12, 'Parth kathiriya', 'nice');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `UID` int(10) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Phone` bigint(11) NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Message` varchar(255) NOT NULL,
  `Status` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`UID`, `Name`, `Phone`, `Email`, `Message`, `Status`) VALUES
(2, 'KK', 5632589645, '123@123.com', '111111111111111111111111111fgfhgdfsk,ghkrghfukds,m.ghfkghf,mmn,mcfbkjghfkjgn%20cx,bkxcfhg!@%23%23$$%^%26*()_ ', ''),
(3, 'ramesh', 5698569663, 'ramesh@gamil.com', 'asdfghjkl;;\'\'\\][[pioyhuyfgffnvbfdhuh gfguifh iuvbhkjch gifhgui hiu fhiguyhafiuhgsjkahdljsdkjfseuoiruifpiuasdfioasjfoijdsk oksdhvhsdfkjhvkjc ', 'false'),
(3, 'pinki', 5632985632, 'pinki@gamil.com', 'The TextField wrapper component is a complete form control including a label, input, and help text. It comes with three variants: outlined (default), filled, and standard.', 'false'),
(4, 'pankaj', 8956782354, 'pankaj@123.com', 'This application includes many things including component quantities, directions, images, and videos. Any person can take knowledge of cooking through this application. and he could also be through the expert of this application. It is a system supposed ', 'false'),
(5, 'ami', 6678956235, 'ami@123.com', 'If you want more information about this project or have any queries in your mind, please contact us. We appreciate your suggestions as well. If you want to know information about this like of project so you can do inquiry. We also help to make your presen', 'false'),
(6, 'rakesh', 7856656235, 'rakesh@123.com', 'Recipe management system is the IT or web application to manage the specific food because Cooking is the most talented one where everyone cannot do it. for some of the cooking is hobbies. In this application, users can register an account and create their', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `likerecipe`
--

CREATE TABLE `likerecipe` (
  `RecipeID` int(11) NOT NULL,
  `UserID` int(10) NOT NULL,
  `UID` int(11) NOT NULL,
  `Likes` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `likerecipe`
--

INSERT INTO `likerecipe` (`RecipeID`, `UserID`, `UID`, `Likes`) VALUES
(1, 12, 1, 'true'),
(1, 0, 2, 'true');

-- --------------------------------------------------------

--
-- Table structure for table `userrecipe`
--

CREATE TABLE `userrecipe` (
  `UID` int(5) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Category` varchar(200) NOT NULL,
  `ShortDes` varchar(255) NOT NULL,
  `imageurl` varchar(300) NOT NULL,
  `Video` varchar(100) NOT NULL,
  `SocialMedia` varchar(100) NOT NULL,
  `Prep` int(10) NOT NULL,
  `CookMins` int(10) NOT NULL,
  `AdditionalMins` int(10) NOT NULL,
  `TotalTime` int(10) NOT NULL,
  `Servings` int(10) NOT NULL,
  `Yield` int(101) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `ingredients` varchar(1000) NOT NULL,
  `directions` varchar(5000) NOT NULL,
  `ChefNote` varchar(1000) NOT NULL,
  `Nutrition` varchar(1000) NOT NULL,
  `ChefName` varchar(60) NOT NULL,
  `Preserved` varchar(80) NOT NULL,
  `Adddate` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userrecipe`
--

INSERT INTO `userrecipe` (`UID`, `Name`, `Category`, `ShortDes`, `imageurl`, `Video`, `SocialMedia`, `Prep`, `CookMins`, `AdditionalMins`, `TotalTime`, `Servings`, `Yield`, `description`, `ingredients`, `directions`, `ChefNote`, `Nutrition`, `ChefName`, `Preserved`, `Adddate`) VALUES
(1, 'Easy Heart-Shaped Cake', 'Eggetarian', '', 'http://localhost:4500/profile/Recipe-image.webp', '', '', 1, 45, 45, 2, 16, 0, 'This heart-shaped cake combines Ann McGavin Stout\'s Homemade Vanilla Cake recipe and QueenCook\'s Easy Valentine\'s Day Cake frosting recipe. The result is a supremely tasty, no-fail heart cake.', '2 cups white sugar,1 cup unsalted butter, softened,2 teaspoons vanilla extract,2 teaspoons almond extract,4 large eggs,3 cups all-purpose flour,⅓ cup cornstarch,1 tablespoon baking powder,¾ teaspoon salt,1 ½ cups milk,2 cups unsalted butter, softened,4 teaspoons vanilla extract,8 cups powdered sugar,2 tablespoons whole milk, or more as needed,2 drops red food coloring, or as desired,2 drops yellow food coloring, or as desired,sprinkles as needed', 'Preheat the oven to 350 degrees F (175 degrees C). Grease an 8-inch square pan and an 8-inch round pan. Line bottoms with parchment or wax paper. Grease paper and dust lightly with flour.,Beat white sugar, butter, vanilla, and almond extract in a large bowl with an electric mixer on high speed until light and fluffy. Beat in eggs, 1 at a time, until well combined.,Stir flour, cornstarch, baking powder, and salt together in another bowl.,Beat 1 cup dry ingredients into wet ingredients until just combined. Add 1/2 cup milk; beat until combined. Continue adding 1 cup dry ingredients and 1/2 cup milk, beating after each addition, until all are used and batter is smooth. Divide evenly between the prepared pans.,Bake in the preheated oven until a toothpick inserted in the center of each cake comes out clean, 45 to 50 minutes. Cool in pans on wire racks for 10 minutes. Remove from pans and cool completely on racks.,Beat butter and vanilla together in a large bowl with an electric mixer on medium speed until combined, about 30 seconds. Gradually add powdered sugar, beating after each addition and adding milk as needed, until frosting is fluffy, smooth, and spreadable.,Remove 1/3 cup frosting and divide between 2 small bowls. Tint 1 dark pink with red food coloring. Tint the other orange-pink with red and yellow food coloring. Tint remaining frosting light pink with red food coloring.,Set square cake on a work surface and rotate 45 degrees so that it resembles a diamond. Spread a little light pink frosting on left and right top sides of the diamond. Cut round cake in half crosswise to make 2 half-moons. Attach half-moons to top left and top right sides of diamond, gently pressing cake pieces together to adhere. Spread remaining light pink frosting over the assembled cake. Drop spoonfuls of dark pink and pink-orange frosting onto cake. Drag an offset spatula through frosting to create a marbled look.,Pat sprinkles onto the sides of the cake. Chill, covered, for up to 3 days. Let stand at room temperature 30 minutes before slicing into 16 pieces.', 'We created a \"SWEET\" stencil, put it on top of the cake, and filled it in with sprinkles.', ' 778 calories, protein 5.2g,carbohydrates 109.4g', 'Parth kathiriya', '5 days in refrigerator', '2022-4-14'),
(2, 'Rose Ice Cream', 'vegetarian', 'Go on, indulge yourself with this exotic combination of rose and saffron. Serve this ice cream for dessert to your guests next time you host a party and wow them! Cashews and almonds also go well with this ice cream.', 'http://localhost:4500/profile/Recipe-Rose Ice Cream.webp', '', '', 5, 0, 2, 2, 8, 8, 'For the rose syrup I used Rooh Afza, a very famous rose syrup made in India. Rooh Afza is usually had with cold water or milk or added to desserts. You can pick it up from any Indian grocery store.', '1 pinch saffron,2 tablespoons warm milk,1 ½ quarts vanilla ice cream, softened,1 ½ tablespoons rose syrup,½ teaspoon ground cardamom,¼ cup chopped pistachio nuts', 'Add the saffron to the warm milk and set aside for 15 minutes.,Combine the softened ice cream, saffron with milk, rose syrup, cardamom, and pistachios in a large bowl. Stir until the ice cream is smooth and pink in color. Scoop the ice cream back into the container and freeze 2 hours, or until ready to eat.', 'If you want to enhance the pistachio flavor toast the nuts on a baking sheet in a 350 degree F oven for 5 to 10 minutes until they are slightly brown.', ' 230 calories,protein 4.3g,carbohydrates 26.6g,fat 12.7g;,cholesterol 43.6mg,sodium 99.6mg', 'rakhi paneliya', '7 days in refrigerator', '2022-4-15');

-- --------------------------------------------------------

--
-- Table structure for table `userregister`
--

CREATE TABLE `userregister` (
  `UID` int(11) NOT NULL,
  `FName` varchar(20) NOT NULL,
  `LName` varchar(20) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `State` varchar(20) NOT NULL,
  `City` varchar(20) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `Mobile` bigint(11) NOT NULL,
  `Password` varchar(16) NOT NULL,
  `Status` varchar(6) NOT NULL,
  `likes` varchar(10) NOT NULL,
  `NoOFRecipe` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userregister`
--

INSERT INTO `userregister` (`UID`, `FName`, `LName`, `Gender`, `State`, `City`, `Email`, `Mobile`, `Password`, `Status`, `likes`, `NoOFRecipe`) VALUES
(3, 'chirag', 'dudhat', 'male', 'guj', 'surat', 'chirag@gmail.com', 8965324178, '123', 'false', 'false', 0),
(4, 'ramesh', 'ladumor', 'male', 'gujarat', 'surat', 'ramesh@gamil.com', 9856324187, '123', 'false', 'false', 0),
(5, 'jainee', 'hirani', 'female', 'gujarat', 'surat', 'a@gmail.com', 6351174602, '1234', 'false', 'false', 0),
(7, 'purvi', 'patel', 'female', 'guj', 'surat', 'purvi@gmail.com', 1256983265, '123', 'false', 'true', 0),
(10, 'sahil', 'patel', 'male', 'gujrat', 'surat', 'sahil@gmail.com', 9157764985, '123', 'false', 'false', 0),
(11, 'rutu', 'patel', 'female', 'gujarat', 'surat', 'rutu@gmail.com', 98659835698, '123', 'false', 'false', 0),
(12, 'Parth', 'kathiriya', 'male', 'gujarat', 'surat', 'parth@gmail.com', 9157764981, '123', 'false', 'false', 0),
(13, 'mayal', 'savaj', 'male', 'gujarat', 'amreli', 'mayal789@gmail.com', 7896541235, 'mayal123', 'false', 'false', 0),
(14, 'rakhi', 'paneliya', 'female', 'maharastra', 'puna', 'rakhi@gmail.com', 8956237823, 'rakhi', 'false', 'false', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD UNIQUE KEY `CID` (`CID`),
  ADD KEY `CID_2` (`CID`),
  ADD KEY `CID_3` (`CID`);

--
-- Indexes for table `likerecipe`
--
ALTER TABLE `likerecipe`
  ADD PRIMARY KEY (`UID`),
  ADD UNIQUE KEY `UID` (`UID`);

--
-- Indexes for table `userrecipe`
--
ALTER TABLE `userrecipe`
  ADD PRIMARY KEY (`UID`),
  ADD UNIQUE KEY `UID` (`UID`);

--
-- Indexes for table `userregister`
--
ALTER TABLE `userregister`
  ADD PRIMARY KEY (`UID`),
  ADD UNIQUE KEY `UID` (`UID`),
  ADD UNIQUE KEY `UID_2` (`UID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userrecipe`
--
ALTER TABLE `userrecipe`
  MODIFY `UID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `userregister`
--
ALTER TABLE `userregister`
  MODIFY `UID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
