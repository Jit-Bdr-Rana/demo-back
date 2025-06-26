Download PostgresSql and postman

npm init -y

npm install express
npm install --save-dev @types/express

npm install typescript ts-node-dev --save-dev
npx tsc --init

npm install sequelize sequelize-typescript pg pg-hstore
npm install @types/sequelize --save-dev

npm install --save-dev tsconfig-paths nodemon

add this script in tsconfig.json
configure
{
"compilerOptions": {
"target": "ES6",
"module": "commonjs",
"moduleResolution": "Node",
"outDir": "./dist",
"rootDir": "./src",
"baseUrl": "./src",
"paths": {
"@models/_": ["models/_"]
},
"strict": true,
"esModuleInterop": true,
"experimentalDecorators": true,
"emitDecoratorMetadata": true
},
"include": ["src"]
}

npm install winston

for formated logging
export function requestLogger(req: Request, res: Response, next: NextFunction) {
logger.log('info', `${req.method} ${req.originalUrl}`, { context: 'HTTP' });
next();
}
