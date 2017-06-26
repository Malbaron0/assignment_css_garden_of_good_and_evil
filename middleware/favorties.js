
const favorites = (req, res, next) => {
    const favoriteFood = req.cookies.food || "Cheesecake";
    const favoriteColor = req.cookies.color || "Blue";

//add to like and dislike list

    req.favoriteFood = favoriteFood;
    req.favoriteColor = favoriteColor;

    if(req.intent == "good"){
        req.description.likes.push(favoriteColor, favoriteFood);
    }
    if(req.intent == "evil"){
        req.description.dislikes.push(favoriteColor, favoriteFood);
    }

    next();

};