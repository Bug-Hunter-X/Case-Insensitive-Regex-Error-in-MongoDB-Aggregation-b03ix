```javascript
const pipeline = [
  {
    $match: {
      field: { $regex: /pattern/i } // Case-insensitive regex
    }
  },
  {
    $group: {
      _id: "$fieldName",
      count: { $sum: 1 }
    }
  }
];

db.collection.aggregate(pipeline).toArray((err, result) => {
  if (err) {
    console.error("Aggregation error:", err);
  } else {
    console.log("Aggregation result:", result);
  }
});
```