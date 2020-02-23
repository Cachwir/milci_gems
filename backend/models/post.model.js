const mongoose = require('mongoose');
const path = require('path');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, "Veuillez donner un titre à ce post."],
    },
    subtitle: {
        type: String,
    },
    text: {
        type: String,
        required: [true, "Veuillez donner un texte à ce post."],
    },
    image: {
        type: String,
        required: [true, "Veuillez donner une image à ce post."],
    },
    source: {
        type: String,
        required: [true, "Veuillez donner une source à ce post."],
        validate: {
            validator: function(v) {
                // INVALID IF THERE ARE % !! Don't use it in a real project
                return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(v);
            },
            message: "la source doit être un url valide",
        },
    },
}, {
    timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

Post.PATH_TO_POST_IMAGES = path.resolve('.') + "/../public/assets/dynamic/postImages/";

module.exports = Post;