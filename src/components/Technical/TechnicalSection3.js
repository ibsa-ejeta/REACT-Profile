import React from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  makeStyles,
  Button,
  Drawer,
  Card,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Grow,
} from "@material-ui/core";

const TechnicalSection3 = () => {
  return (
    <Box>
      <Card id="Data_types">
        <Typography variant="h4">Data Types</Typography>
        <Typography>
          The latest ECMAScript standard defines seven data types:
        </Typography>
        <List>
          <ListItem>
            Six data types that are primitives:
            <List>
              <ListItem>Boolean -- true and false.</ListItem>
              <ListItem>
                null -- A special keyword denoting a null value. Because
                JavaScript is case-sensitive, null is not the same as Null,
                NULL, or any other variant.
              </ListItem>
              <ListItem>
                undefined -- A top-level property whose value is undefined.
              </ListItem>
              <ListItem>Number -- 42 or 3.14159.</ListItem>
              <ListItem>String -- "Howdy"</ListItem>
              <ListItem>
                Symbol -- (new in ECMAScript 2015). A data type whose instances
                are unique and immutable.
              </ListItem>
            </List>
          </ListItem>
          <ListItem>and Object</ListItem>
        </List>
        <Typography>
          Although these data types are a relatively small amount, they enable
          you to perform useful functions with your applications. Objects and
          functions are the other fundamental elements in the language. You can
          think of objects as named containers for values, and functions as
          procedures that your application can perform.
        </Typography>
      </Card>

      <Card id="if...else_statement">
        <Typography variant="h4">if...else Statement</Typography>
        <Typography>
          Use the if statement to execute a statement if a logical condition is
          true. Use the optional else clause to execute a statement if the
          condition is false. An if statement looks as follows:
        </Typography>
        <Paper elevation={4}>
          <Typography>if (condition)</Typography>
          <Typography>&#123; </Typography>
          <Typography>&nbsp; statement_1;</Typography>
          <Typography>&#125; else &#123; </Typography>
          <Typography>&nbsp; statement_2;</Typography>
          <Typography>&#125;</Typography>
        </Paper>
        <Typography>
          condition can be any expression that evaluates to true or false. See
          Boolean for an explanation of what evaluates to true and false. If
          condition evaluates to true, statement_1 is executed; otherwise,
          statement_2 is executed. statement_1 and statement_2 can be any
          statement, including further nested if statements.
        </Typography>
        <Typography>
          You may also compound the statements using else if to have multiple
          conditions tested in sequence, as follows:
        </Typography>
        <Paper elevation={4}>
          <Typography>if (condition_1) </Typography>
          <Typography>&#123;</Typography>
          <Typography> &nbsp; statement_1; </Typography>
          <Typography>&#125; else if (condition_2) &#123;</Typography>
          <Typography>&nbsp; statement_2;</Typography>
          <Typography>&#125; else if (condition_n) &#123;</Typography>
          <Typography> &nbsp; statement_n;</Typography>
          <Typography>&#125; else &#123; </Typography>
          <Typography> &nbsp; statement_last; </Typography>
          <Typography>&#125;</Typography>
        </Paper>
        <Typography>
          In the case of multiple conditions only the first logical condition
          which evaluates to true will be executed. To execute multiple
          statements, group them within a block statement (&#123; ... &#125;) .
          In general, it's good practice to always use block statements,
          especially when nesting if statements:
        </Typography>

        <Paper elevation={4}>
          <Typography> if (condition) &#123; </Typography>
          <Typography>&nbsp; statement 1 runs if condition is true;</Typography>
          <Typography>
            &nbsp; statement 2 runs if condition is true;{" "}
          </Typography>
          <Typography>&#125; else &#123;</Typography>
          <Typography>
            &nbsp; statement 3 runs if condition is false;
          </Typography>
          <Typography>
            &nbsp; statement 4 runs if condition is false;{" "}
          </Typography>
          <Typography>&#125;</Typography>
        </Paper>

        <Typography>
          It is advisable to not use simple assignments in a conditional
          expression, because the assignment can be confused with equality when
          glancing over the div. For example, do not use the following
        </Typography>
        <Paper elevation={4}>
          <Typography>if (x = y) &#123; </Typography>
          <Typography>&nbsp; /* statements here */ </Typography>
          <Typography>&#125;</Typography>
        </Paper>
        <Typography>
          If you need to use an assignment in a conditional expression, a common
          practice is to put additional parentheses around the assignment. For
          example:
        </Typography>
        <Paper elevation={4}>
          <Typography>if ((x = y)) &#123; </Typography>
          <Typography>&nbsp; /* statements here */ </Typography>
          <Typography>&#125;</Typography>
        </Paper>
      </Card>

      <Card id="While_statement">
        <Typography variant="h4">while Statement</Typography>
        <Typography>
          A while statement executes its statements as long as a specified
          condition evaluates to true. A while statement looks as follows:
        </Typography>
        <Paper elevation={4}>
          <Typography>while (condition) &#123;</Typography>
          <Typography> &nbsp; statement;</Typography>
          <Typography>&#125;</Typography>
        </Paper>
        <Typography>
          If the condition becomes false, statement within the loop stops
          executing and control passes to the statement following the loop.
        </Typography>
        <Typography>
          The condition test occurs before statement in the loop is executed. If
          the condition returns true, statement is executed and the condition is
          tested again. If the condition returns false, execution stops and
          control is passed to the statement following while.
        </Typography>
        <Typography>
          To execute multiple statements, use a block statement (&#123; ...
          &#125;) to group those statements.
        </Typography>
        <Typography>Example:</Typography>
        <Typography>
          The following while loop iterates as long as n is less than three:
        </Typography>
        <Paper elevation={4}>
          <Typography>var n = 0;</Typography>
          <Typography>var x = 0; </Typography>
          <Typography>while (n &lt; 3) &#123;</Typography>
          <Typography> &nbsp; n++;</Typography>
          <Typography> &nbsp; x += n;</Typography>
          <Typography>&#125;</Typography>
        </Paper>
        <Typography>
          With each iteration, the loop increments n and adds that value to x.
          Therefore, x and n take on the following values:
        </Typography>
        <List>
          <ListItem>After the first pass: n = 1 and x = 1</ListItem>
          <ListItem>After the second pass: n = 2 and x = 3</ListItem>
          <ListItem>After the third pass: n = 3 and x = 6</ListItem>
        </List>
        <Typography>
          After completing the third pass, the condition n &lt; 3 is no longer
          true, so the loop terminates.
        </Typography>
      </Card>

      <Card>
        <Typography variant="h4">Function declarations</Typography>
        <Typography>
          A function definition (also called a function declaration, or function
          statement) consists of the function keyword, followed by:
        </Typography>
        <List>
          <ListItem>The name of the function.</ListItem>
          <ListItem>
            A list of arguments to the function, enclosed in parentheses and
            separated by commas.
          </ListItem>
          <ListItem>
            The JavaScript statements that define the function, enclosed in
            curly brackets, &#123; &#125;.
          </ListItem>
        </List>
        <Typography>
          For example, the following defines a simple function named square:
        </Typography>
        <Paper elevation={4}>
          <Typography>function square(number) &#123;</Typography>
          <Typography>&nbsp; return number * number;</Typography>
          <Typography>&#125;</Typography>
        </Paper>
        <Typography>
          The function square takes one argument, called number. The function
          consists of one statement that says to return the argument of the
          function (that is, number) multiplied by itself. The return statement
          specifies the value returned by the function.
        </Typography>
        <Paper elevation={4}>
          <Typography>return number * number;</Typography>
        </Paper>
        <Typography>
          Primitive parameters (such as a number) are passed to functions by
          value; the value is passed to the function, but if the function
          changes the value of the parameter, this change is not reflected
          globally or in the calling function.
        </Typography>
      </Card>
    </Box>
  );
};

export default TechnicalSection3;
