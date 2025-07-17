<!-- swagger -->

npm install swagger-ui-express swagger-jsdoc
npm install --save-dev @types/swagger-jsdoc @types/swagger-ui-express

/\*\*

- @openapi
- /api/users:
- post:
-     summary: summary
-     tags:
-       - Users
-     parameters:
-       - in: path
-         name: id
-         required: true
-         schema:
-           type: integer
-         description: ID of the user to retrieve
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
