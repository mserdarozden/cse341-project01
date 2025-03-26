const getAll = async (req, res) => {
    await mongodb
      .getDatabase()
      .db()
      .collection('users')
      .find()
      .toArray((err, users) => {
        if (err) {
          res.status(400).json({ message: err });
          return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
      });
  };
  
  const getSingle = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    await mongodb
      .getDatabase()
      .db()
      .collection('users')
      .find({ _id: userId })
      .toArray((err, result) => {
        if (err) {
          res.status(400).json({ message: err });
          return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0]);
      });
  };