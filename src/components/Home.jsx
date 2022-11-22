import React from "react";
import "./home.css"
import RecipeCard from "../components/RecipeCard"
import * as actions from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import { diets } from "./auxiliar";
import Paginado from "../components/Paginado"
import SearchBar from "./SearchBar";
import Loading from "./Loading";

// export class Home extends React.Component {
//     constructor(props){
//         super(props)
//     }

//     componentDidMount() {
//         this.props.getRecipes()
//       }
    

//     render(){
//     return(
        // <div>
        //     <h1>estas en la home</h1>
        //     <div>
        //         <input placeholder="enter recipe´s name..."></input>
        //         <button>Search</button>
        //     </div>
        //     <div>
        //     <Link to="/create">
        //         <button>Create new recipe</button>
        //     </Link>
                
        //     </div>
    
        //     <select name="Diet">
        //         <option>----Select a Diet----</option>
        //         <option value = "All">Todas</option>
        //         <option value = "GF">Gluten Free</option>
        //         <option value = "Keto">Ketogenic</option>
        //         <option value = "Veg">Vegetarian</option>
        //         <option value = "Lacto-V">Lacto-Vegetarian</option>
        //         <option value = "Ovo-V">Ovo-Vegetarian</option>
        //         <option value = "Vegan">Vegan</option>
        //         <option value = "Pes">Pescetarian</option>
        //         <option value = "Paleo">Paleo</option>
        //         <option value = "Primal">Primal</option>
        //         <option value = "LOWF">Low FODMAP</option>
        //         <option value = "W30">Whole30</option>
        //     </select>
        //     <select name = "Alfabetic">
        //         <option>----Alfabetic Order----</option>
        //         <option value = "Asc">Ascendent</option>
        //         <option value = "Des">Descendent</option>
        //     </select>
        //     <select name = "Health-Score">
        //         <option>----Health-Score Order----</option>
        //         <option value = "Asc">Ascendent</option>
        //         <option value = "Des">Descendent</option>
        //     </select>
        //     <div>{this.props.recipes.map(r => {return (
        //         <RecipeCard key={r.id} id={r.id} name={r.name} 
        //         // diets={Object.values(r.diets)} 
        //         diets = {r.diets.map(d=>diets(d))}
        //         dishtype={r.dishtype} 
        //         image={r.image} healthscore={r.healthscore}/>)})}
        //     </div>

        // </div>
        
//     )}
// }

// export const mapStateToProps = (state) =>{
//     return {recipes: state.recipes}
//   }
  
//   export const mapDispatchToProps = (dispatch) =>{
//     return {
//       getRecipes: () => dispatch(actions.getRecipes()) 
//     }
//   }

// export default connect(mapStateToProps,mapDispatchToProps)(Home)

const Home = ()=>{
    const dispatch = useDispatch();
   
    const recipes = useSelector ((state) => state.recipes);
    console.log(recipes)

    const [currentPage,setCurrentPage]=useState(1);
    const [recipesxPage,setRecipesxPage]=useState(9);
    const indexLastRecipe = currentPage * recipesxPage;
    const indexFirstRecipe = indexLastRecipe - recipesxPage;
    const currentRecipes= recipes.slice(indexFirstRecipe,indexLastRecipe)

    const [orden, setOrden] = useState("")

    const paginado = (number)=>{
        setCurrentPage(number)
    }
   
    useEffect(() => {
         if(!recipes.length){
          dispatch(actions.getRecipes());
       }
    },[dispatch,recipes]);
    
    

    return recipes.length>0 ? ( 
        <div>
            <div>
                <SearchBar setCurrentPage={setCurrentPage} setOrden={setOrden}/>
            </div>
            
            <div className="paginadotop">
                <Paginado recipesxPage={recipesxPage} 
                recipes={recipes.length}
                paginado={paginado}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>
            </div>

            <div className="recipes">{currentRecipes.map(r => {return (
                <RecipeCard key={r.id} id={r.id} name={r.name} 
                diets = {r.diets.map(d=>diets(d))}
                dishtype={r.dishtype} 
                image={r.image} healthscore={r.healthscore}/>)})}
            </div>

            <div>
                <Paginado recipesxPage={recipesxPage} 
                recipes={recipes.length}
                paginado={paginado}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>
            </div>

        </div>
    ):(<Loading/>)

}

export default Home;