import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const recipeInfo = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  };

  const [formData, setFormData] = useState(recipeInfo);


  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }


  function handleSubmit(event) {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...recipeInfo });
  }




  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name" 
                type="text" 
                placeholder="Name"
                id="name" 
                onChange={handleChange} 
                value={formData.name} 
                /> 
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                id="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                />  
            </td>
            <td>
              <input
                name="photo"
                type="url"
                placeholder="URL"
                id="photo"
                onChange={handleChange}
                value={formData.photo}
                />
            </td>
            <td>
              <textarea
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                id="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                />
            </td>
            <td>
              <textarea  
                name="preparation"
                type="text"
                placeholder="Preperation"
                id="preparation"
                onChange={handleChange}
                value={formData.preparation}
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
