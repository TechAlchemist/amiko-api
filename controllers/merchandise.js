async function getFeatured(req, res) {
    let merchandise = "merchandise"
    res.json(merchandise);
}

async function postAntique(req, res) {
    if (!req.files) {
        return res.status(500).send({ msg: 'file not found' });
    }

    const myFile = req.files.file;

    myFile.mv(`./public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name

        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });


}

module.exports = {
    getFeatured,
    postAntique
};