<!-- swagger -->

npm install swagger-ui-express swagger-jsdoc
npm install --save-dev @types/swagger-ui-express @types/swagger-ui-express

/\*\*

- @openapi
- /api/users:
- post:
-     summary: summary
-     tags:
-       - Users
-     requestBody:
-       required: true
-       content:
-         application/json:
-           schema:
-             type: object
-             required:
-               - name
-               - email
-             properties:
-               name:
-                 type: string
-               email:
-                 type: string
-             example:
-               name: Jit Rana
-               email: jit@example.com
-     responses:
-       201:
-         description: User created successfully
-         content:
-           application/json:
-             schema:
-               type: object
-               properties:
-                 id:
-                   type: integer
-                 name:
-                   type: string
-                 email:
-                   type: string
-             example:
-               id: 1
-               name: Jit Rana
-               email: jit@example.com
  \*/

npm install multer
npm install --save-dev @types/multer

npm install jsonwebtoken
npm install @types/jsonwebtoken
npm install class-validator class-transformer
