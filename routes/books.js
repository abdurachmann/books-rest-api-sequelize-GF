const model = require('../models/index');

module.exports = function(app) {
    // POST data
    app.post("/books", function(req, res, next) {
        const {title, author} = req.body;
        model.Books.create({
            title: title,
            author: author
        })

            .then(books =>
                res.status(201).json({
                    error: false,
                    data: books,
                    message: "Data has been created"
                })
            )
            .catch(error => 
                res.json({
                    error: true,
                    data: [],
                    error: error
                })
            );
    });

    // GET data
    app.get("/books", function(req, res, next) {
        model.Books.findAll({})
            .then(books =>
                res.json({
                    error: false,
                    data: books
                })
            )
            .catch(error =>
                res.json({
                    data: [],
                    error: error
                })
            );
    });

    // Update/PUT data
    app.put("/books/:id", function(req, res, next) {
        const books_id = req.params.id;

        const {title, author} = req.body;

        model.Books.update(
            {
                title: title,
                author: author
            },
            {
                where: {
                    id: books_id
                }
            }
        )
        .then(books => 
            res.json({
                error: false,
                message: "Data has been updated"
            })
        )
        .catch(error =>
            res.json({
                error: true,
                error: error
            })
        );
    });

    // Delete data
    app.delete("/books/:id", function(req, res, next) {
        const books_id = req.params.id;

        model.Books.destroy({
            where: {
                id: books_id
            }
        })
        .then(status => 
            res.json({
                error: false,
                message: "Data has been delete"
            })
        )
        .catch(error => 
            res.json({
                error: true,
                error: error
            })    
        );
    });
}