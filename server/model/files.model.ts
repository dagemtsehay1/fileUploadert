import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../utils/connection";

const File = sequelize.define("files", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    originalName: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.STRING,
    }
 });

 export  function createTable(){

   sequelize.sync().then(() => {
     console.log('File table created successfully!');
    }).catch((error: any) => {
      console.error('Unable to create table : ', error);
    });
  }

  export default File;;