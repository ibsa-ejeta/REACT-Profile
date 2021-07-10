import React from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  makeStyles,
  Button,
  Drawer,
  Card,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Grow,
} from "@material-ui/core";

const TechnicalCard2 = () => {
  return (
    <Box>
      <Card>
        <Typography variant="h4">Hello World</Typography>
        <Typography>
          To get started with writing JavaScript, open a browser (such as Google
          Chrome), right click and select inspect. Click the console tab and
          type your code.
        </Typography>

        <Paper elevation={4}>
          <Typography>function greetMe(yourName) </Typography>
          <Typography>&#123; </Typography>
          <Typography>&nbsp; alert("Hello " + yourName); </Typography>
          <Typography>&#125;</Typography>
          <Typography>greetMe("World"); &#47;&#47; Hello World</Typography>
        </Paper>
      </Card>

      <Card className="main-Card" id="Variables">
        <Typography variant="h4">Variables</Typography>
        <Typography>
          You use variables as symbolic names for values in your application.
          The names of variables, called identifiers, conform to certain rules.
        </Typography>
        <Typography>
          A JavaScript identifier must start with a letter, underscore (_), or
          dollar sign ($); subsequent characters can also be digits (0-9).
          Because JavaScript is case sensitive, letters include the characters
          "A" through "Z" (uppercase) and the characters "a" through "z"
          (lowercase).
        </Typography>
        <Typography>
          You can use ISO 8859-1 or Unidiv letters such as å and ü in
          identifiers. You can also use the Unidiv escape sequences as
          characters in identifiers. Some examples of legal names are
          Number_hits, temp99, and _name.
        </Typography>
      </Card>

      <Card>
        <Typography variant="h4">Declaring Variables</Typography>
        <Typography>You can declare a variable in three ways:</Typography>
        <Typography>1. With the keyword var. For example,</Typography>
        <Paper elevation={4} className="examples">
          <Typography className="example-p">var x = 42;</Typography>
        </Paper>
        <Typography>
          This syntax can be used to declare both local and global variables.
          Variable declaration with var is the old JavaScript method of
          declaring variables. These variables can be assigned new values later
          on without any problem.
        </Typography>

        <Typography>2. With the keyword let. For example,</Typography>
        <Paper elevation={4} className="examples">
          <Typography className="example-p">let y = 13;</Typography>
        </Paper>
        <Typography>
          These variables can also be assigned new values later on without any
          problem.
        </Typography>

        <Typography>3. With the keyword const. For example,</Typography>
        <Paper elevation={4} className="examples">
          <Typography className="example-p">const name = "John";</Typography>
        </Paper>
        <Typography>
          These variables cannot be assigned new values later on because const
          declares a constant. A constant value is one that never changes so, if
          we try to reassign a constant variable, we will run into an error.
        </Typography>
      </Card>

      <Card className="main-Card" id="Variable_scope">
        <Typography variant="h4">Variable Scope</Typography>
        <Typography>
          When you declare a variable outside of any function, it is called a
          global variable, because it is available to any other div in the
          current document. When you declare a variable within a function, it is
          called a local variable, because it is available only within that
          function.
        </Typography>
        <Typography>
          JavaScript before ECMAScript 2015 does not have block statement scope;
          rather, a variable declared within a block is local to the function
          (or global scope) that the block resides within. For example the
          following will log 5, because the scope of x is the function (or
          global context) within which x is declared, not the block, which in
          this case is an if statement.
        </Typography>
        <Paper elevation={4} className="examples">
          <Typography className="example-p">if (true)</Typography>
          <Typography className="example-p">&#123;</Typography>
          <Typography className="example-p">&nbsp; var x = 5; </Typography>
          <Typography className="example-p">&#125;</Typography>
          <Typography className="example-p">
            console.log(x); &#47;&#47; 5
          </Typography>
        </Paper>

        <Typography>
          This behavior changes, when using the let declaration introduced in
          ECMAScript 2015.
        </Typography>
        <Paper elevation={4} className="examples">
          <Typography className="example-p">if (true)</Typography>
          <Typography className="example-p">&#123; </Typography>
          <Typography className="example-p"> &nbsp; let y = 5; </Typography>
          <Typography className="example-p">&#125; </Typography>
          <Typography className="example-p">
            console.log(y); &#47;&#47; ReferenceError: y is not defined
          </Typography>
        </Paper>
      </Card>
      <Card className="main-Card" id="Global_variables">
        <Typography variant="h4">Global Variables</Typography>
        <Typography>
          Global variables are in fact properties of the global object. In web
          pages the global object is window, so you can set and access global
          variables using the window.variable syntax.
        </Typography>
        <Typography>
          Consequently, you can access global variables declared in one window
          or frame from another window or frame by specifying the window or
          frame name. For example, if a variable called phoneNumber is declared
          in a document, you can refer to this variable as window.phoneNumber.
        </Typography>
      </Card>

      <Card className="main-Card" id="Constants">
        <Typography variant="h4">Local Variables</Typography>
        <Typography>
          When you use JavaScript, local variables are variables that are
          defined within functions. They have local scope, which means that they
          can only be used within the functions that define them. Since local
          variables are only recognized inside their functions, variables with
          the same name can be used in different functions. Local variables are
          created when a function starts, and deleted when the function is
          completed.
        </Typography>
        <Paper elevation={4} className="examples">
          <Typography className="example-p">
            &#47;&#47; THIS WILL CAUSE AN ERROR
          </Typography>
          <Typography className="example-p">
            function f() &#123;&#125;;{" "}
          </Typography>
          <Typography className="example-p">const f = 5;</Typography>
          <Typography className="example-p">
            &#47;&#47; THIS WILL CAUSE AN ERROR ALSO
          </Typography>
          <Typography className="example-p">function f()</Typography>
          <Typography className="example-p">&#123;</Typography>
          <Typography className="example-p"> &nbsp; const g = 5; </Typography>
          <Typography className="example-p"> &nbsp; var g;</Typography>
          <Typography className="example-p">&#125;</Typography>
        </Paper>
        <Typography>
          However, object attributes are not protected, so the following
          statement is executed without problems.
        </Typography>
        <Paper elevation={4} className="examples">
          <Typography className="example-p">
            const MY_OBJECT = &#123;
          </Typography>
          <Typography className="example-p">&nbsp; "key": "value"</Typography>
          <Typography className="example-p">&#125;; </Typography>
          <Typography className="example-p">
            MY_OBJECT.key = "otherValue";
          </Typography>
        </Paper>
      </Card>
    </Box>
  );
};

export default TechnicalCard2;
