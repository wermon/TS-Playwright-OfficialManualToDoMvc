const searched_contains_values = ["android smartphone", "8gb", "6gb", "4gb", "2gb", "0gb", "1tb", "2tb", "3tb", "4tb", "5tb", "6tb", "7tb", "8tb", "9tb", "0tb",
    "7.5uk", "7uk", "gaming laptop", "gb ssd", "mirrorless camera", "vertical mouse", "beoplay", "beosound", "official gopro", "dvr security", "onepwr", "dropbox",
    "drop box", "parcel box", "outdoor parcel", "delivery box", "graphics tablet", "gb ram", "isteady", "nvme", "novablast", "air conditioner", "air purifier",
    "plantronics", "logitech", "rg505", "0cl", "selection box", "gift hamper", "extra virgin olive oil", "chocolate truffles", "crisps", "toilet roll"];
const text = "Imikoko for Google Pixel 6 Case, Liquid Silicone Gel Rubber Bumper Case with Soft Microfiber Lining Shockproof Protective Cover for Google Pixel 6 -Smooth Black";
searched_contains_values
    .map(el => { return el.toLowerCase(); })
    .filter(el => { text.includes(el); });
//# sourceMappingURL=verify%20array%20contains%20text.js.map