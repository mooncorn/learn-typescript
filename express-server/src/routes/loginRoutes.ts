import { Router, Request, Response, NextFunction } from 'express';

export interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next();
  } else {
    res.status(403).send('Denied');
  }
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
      </div>
      <button>Submit</button>
    </form>

  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'dave@gmail.com' && password === 'dave') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`You are logged in.<br/><a href="/logout">Logout</a>`);
  } else {
    res.send(`You are not logged in.<br/><a href="/login">Login</a>`);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;

  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route');
});

export { router };
