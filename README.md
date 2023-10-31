# **Hexagonal Architecture** with Typescript Turbo Awilix example Project

## A fully functional example project written in **Typescript** showing how to implement the **Hexagonal Architecture** *(Ports and Adapters)*

This project was built with Typescript and shows how to implement the HEXAGONAL ARCHITECTURE. It shows how to:

* Split a project into layers (Domain, Application, Infrastructure)
* Add dependecies between the layers
* Create rich domain models (Domain layer)
* Create input and output ports(interfaces)
* Create use-cases/services (which implement input ports and use output ports)
* Create an adapter REST API with Expressjs
* Create an adapter for persistency
* Configure and use Awilix for dependency injection

![diagram of a hexagonal architecture](https://reflectoring.io/images/posts/spring-hexagonal/hexagonal-architecture_hu6764515d7030d45af6f7f498c79e292b_50897_956x0_resize_box_3.png)

## How to run and use this example Typescript project

1. Clone this project
2. Install dependencies with "npm install"
3. Build and run the project with "npm run start"
4. Open any platform for API debugging of your choice (e.g. Postman, Apidog)
5. send: POST http://localhost:/8083/api/accounts/transfer
{
    "sourceId": 1,
    "targetId": 2,
    "amount": 45 // 0 > amount <= 50 (204) otherwise (400)
}