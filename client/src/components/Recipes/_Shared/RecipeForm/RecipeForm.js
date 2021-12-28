import React, { useState } from 'react';
import './RecipeForm.css';
import RecipeFloatingLabel from '../RecipeFloatingLabel/RecipeFloatingLabel';
import MDEditor, { commands } from '@uiw/react-md-editor';

const RecipeForm = (props) => {
    let { children, fields, handleSubmit } = props;
    let titleField = fields.title
    let preparationTimeField = fields.preparationTime
    let cookingTimeField = fields.cookingTime
    let servingsField = fields.servings

    return (
        <div className="recipe-form">
            <form onSubmit={handleSubmit} autoComplete='off' autoCorrect='off'>
                <hr className="recipe-form-separator" />
                <div className="recipe-title-input">
                    <div className="recipe-section-title">Name your recipe</div>
                    <RecipeFloatingLabel placeholder={titleField.placeholder} name={titleField.name}
                        type={titleField.type} id={titleField.id}
                        label={titleField.label} key={titleField.id}
                        validatorFunc={titleField.validatorFunc} />
                </div>
                <hr className="recipe-form-separator" />
                <div className="row">
                    <div className="recipe-section-title">Recipe By Numbers</div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <RecipeFloatingLabel placeholder={preparationTimeField.placeholder} name={preparationTimeField.name}
                            type={preparationTimeField.type} id={preparationTimeField.id}
                            label={preparationTimeField.label} key={preparationTimeField.id}
                            validatorFunc={preparationTimeField.validatorFunc} />
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <RecipeFloatingLabel placeholder={cookingTimeField.placeholder} name={cookingTimeField.name}
                            type={cookingTimeField.type} id={cookingTimeField.id}
                            label={cookingTimeField.label} key={cookingTimeField.id}
                            validatorFunc={cookingTimeField.validatorFunc} />
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <RecipeFloatingLabel placeholder={servingsField.placeholder} name={servingsField.name}
                            type={servingsField.type} id={servingsField.id}
                            label={servingsField.label} key={servingsField.id}
                            validatorFunc={servingsField.validatorFunc} />
                    </div>
                </div>
                <hr className="recipe-form-separator" />
                <div className="row">
                    <div className="recipe-section-title">Recipe Algorithm</div>
                    <div className="com-md-12">
                        <MarkdownEditor initValue={""}/>
                    </div>
                </div>
                <hr className="recipe-form-separator" />
                <div className="row">
                    <div className="recipe-section-title">Recipe Multimedia</div>
                </div>
                <div className="recipe-submit-form">
                    <button type="submit" className="btn btn-lg btn-primary">Add New Recipe</button>
                </div>
            </form>

        </div>
    );
}

const MarkdownEditor = ( {initValue} ) => {
    let [value, setValue] = useState(initValue)

    return (
        <MDEditor value={value} onChange={setValue} commands={[
            commands.bold,
            commands.italic,
            commands.strikethrough,
            commands.hr,
            commands.title,
            commands.divider,
            commands.link,
            commands.quote,
            commands.divider,
            commands.unorderedListCommand,
            commands.orderedListCommand]}
            fullscreen={false}
        />
    )
}

export default RecipeForm;