class APIFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }
    search(){
        const keyword=this.queryStr.keyword?{
            product_name:{
                $regex:this.queryStr.keyword,
                $options:'i'
            }
        }:{}
        this.query=this.query.find({...keyword});
        return this;
    }
     //to filter 
    //  filter(){
    //      const queryCopy={...this.queryStr}
    //      //removing fields from query
    //      const removeFields=['keyword'];
    //      removeFields.forEach(el=>delete queryCopy[el]);
    //      console.log(queryCopy)
    //      //for price range
    //      let queryStr=JSON.stringify(queryCopy)
    //     //  queryStr=queryStr.replace(/\b(gt|lt|gte|lte)\b/g,match=>`$${match}`)

    //      console.log(queryStr)

    //      this.query=this.query.find(JSON.parse(queryStr)); //json data lai manipulate garna parse use garne
    //      return this;
    //  }

    filtering(){
        const queryObj = {...this.queryString} //queryString = req.query
 
        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete(queryObj[el]))
        
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)
 
     //    gte = greater than or equal
     //    lte = lesser than or equal
     //    lt = lesser than
     //    gt = greater than
        this.query.find(JSON.parse(queryStr))
          
        return this;
     }

}


module.exports=APIFeatures;