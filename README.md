# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




### Deployment

### `yarn build` fails to minify

## API Documentation
#### Sign in
     POST  api/v1/auth
```
     {
      "username":"chubi",
      "password":"123234566"
      
      } 
```

#### Signup
      POST /users
```
    {
        "email": "test@email.com",
        "password": "1234567",
        "username": "dan",
        "name": "danile adama"
    }
 ```
#### Category
###### List all categories
     GET api/v1/categories
###### Create categories
     POST api/v1/categories
```
	{
	"name": "bike" ,
     "category_code": 232
	}
```
###### Edit categories
    PATCH api/v1/categories/24
```
	{
	 "name": "bike" ,
     "category_code": 232
	}

 ```

###### Delete categories
	DELETE api/v1/categories/25


#### Product
###### List all products
     GET api/v1/products

###### Create product
     POST api/v1/products
```
	{
     "name": "bike",
     "product_code": 232,
     "quantity":  12 ,
     "price":   123.2,
     "brand":  "nike",
     "category_id": 1
	}
```
###### Edit product
    PATCH api/v1/products/24
 ```
	{
	 "name": "bike",
     "product_code": 232,
     "quantity":  12 ,
     "price":   123.2,
     "brand":  "nike",
     "category_id": 1
	}

 ```
###### Delete product
	DELETE api/v1/products/25






## Architecture
- There are three entities created in this project (user, category, product)
- The Category entity handles the categorization of products , it can be used as a filter for proucts.
- The Product entity includes all list of products available for sale.
- The Users can signup through the signup link . 

## Backend
- React


## Requirements

#### Ksec
- [x] The user should be able to see a list of products.
- [x] The user must authenticate using a username and password.
- [x] The user must be able to create, edit and delete products.
- [x] User must be able to create, edit and delete categories

#### Note 

