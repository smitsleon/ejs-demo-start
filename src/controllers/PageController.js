import { person } from "../data/data.js";
import { navItems } from "../data/data.js";
import { dinosaurs } from "../data/data.js";

export const home = (req, res)=> {
    res.render("pages/home", {
        title: "Dinosaurs around the world",
        content: "Welcome to the world of dinosaurs",
        navItems,
    })
};

export const about = (req, res)=> {
    res.render("pages/default", {
        title: "About us",
        content: "We are a group of dinosaurs experts",
        team: ["T-rex", "Velociraptor", "Stegosaurus", "<strong>Premium</strong> Diplodocus"],
        navItems,
    })
};

export const contact = (req, res)=> {
    res.render("pages/contact", {
        title: "Contact",
        content: "Contact us at 1234567890",
        person,
        navItems,
    })
};

export const privacy = (req, res)=> {
    res.render("pages/default", {
        title: "Privacy Policy",
        content: "Dinosaurs are protective of their privacy",
        team: false,
        navItems,
    })
};

export const allDinosaurs = (req, res) => {
    res.render("pages/dinosaurs", {
        title: "Dinosaurs around the world",
        dinosaurs,
        navItems,
    })
};