# TuskDesk Suite

This is the demo project for a workshop on using [Nrwl Nx](https://nrwl.io/nx). It is a suite of apps for a help desk type of solution. There is an application for managing company accounts, one for reporting, one for users to submit and view their tickets, and one for agents to work open tickets.

## Requirements
Install the Angular CLI globally
```console
npm install -g @angular/cli
```
or
```console
yarn global add @angular/cli
```

## Initial setup
cd into the local repo directory and run:
```console
npm install
```
or
```console
yarn
```

## Running the applications in the suite
There is a server for the backend data that needs to be running for any of the front end apps to run:
```console
npm run server
```
The front end (Angular) apps can be run with the following commands:
```console
npm run account-admin
npm run reporting
npm run customer-portal
```
