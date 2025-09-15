# Devtinder APIs

## authRouter

- POST /singup
- POST /login
- POST /logout

## profileRouter

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password - Forgot password API

## connectionRequestRouter

- POST /request/send/:status/:userId
- POST /request/send/:status/:userId
- POST /request/review/:status/:requestId
- POST /request/review/:status/:requestId

## userRouter

- GET /user/connections
- GET /user/request/received
- GET /user/feed - Gets you the profiles of ther users on platform

Status: ignore, interested, accepted, rejected
