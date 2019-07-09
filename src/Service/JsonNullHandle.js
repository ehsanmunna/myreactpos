
class JsonNullToString {
    ToString(obj){
        var objKey = Object.keys(obj);
        for(var i = 0; i < objKey.length; i++){
            var elem = objKey[i];
            if(obj[elem] == null)
                obj[elem] = "";
    
            if(typeof obj[elem] == 'object')
                this.ToString(obj[elem]);
            
        }
        return obj;
    }
}

export default new JsonNullToString();