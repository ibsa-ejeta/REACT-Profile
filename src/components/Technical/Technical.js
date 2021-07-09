import React from "react";

const Technical = () => {
  return (
    <main className="main-div">
      <div className="table-content">
        <div className="row-grid" id="navbar"></div>
        <div className="dropdown" id="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            JS Documentation
          </button>
          <div
            className="dropdown-menu"
            id="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
          ></div>
        </div>
      </div>

      <div className="main-content" id="main-doc">
        <section className="main-section" id="Introduction">
          <h1 className="main-title">JavaScript Documentation</h1>
          <h3>Introduction</h3>
          <p>
            JavaScript is a cross-platform, object-oriented scripting language.
            It is a small and lightweight language. Inside a host environment
            (for example, a web browser), JavaScript can be connected to the
            objects of its environment to provide programmatic control over
            them.
          </p>
          <p>
            JavaScript contains a standard library of objects, such as Array,
            Date, and Math, and a core set of language elements such as
            operators, control structures, and statements. Core JavaScript can
            be extended for a variety of purposes by supplementing it with
            additional objects; for example:
          </p>
          <ul>
            <li>
              Client-side JavaScript extends the core language by supplying
              objects to control a browser and its Document Object Model (DOM).
              For example, client-side extensions allow an application to place
              elements on an HTML form and respond to user events such as mouse
              clicks, form input, and page navigation.
            </li>
            <li>
              Server-side JavaScript extends the core language by supplying
              objects relevant to running JavaScript on a server. For example,
              server-side extensions allow an application to communicate with a
              database, provide continuity of information from one invocation to
              another of the application, or perform file manipulations on a
              server.
            </li>
          </ul>
        </section>

        <section className="main-section" id="What_you_should_already_know">
          <h3>What You Should Already Know</h3>
          <p>This guide assumes you have the following basic background:</p>
          <ul>
            <li>
              A general understanding of the Internet and the World Wide Web
              (WWW).
            </li>
            <li>Good working knowledge of HyperText Markup Language (HTML).</li>
          </ul>
        </section>

        <section className="main-section" id="JavaScript_and_Java">
          <h3>JavaScript and Java</h3>
          <p>
            JavaScript and Java are similar in some ways but fundamentally
            different in some others. The JavaScript language resembles Java but
            does not have Java's static typing and strong type checking.
            JavaScript follows most Java expression syntax, naming conventions
            and basic control-flow constructs which was the reason why it was
            renamed from LiveScript to JavaScript.
          </p>
          <p>
            In contrast to Java's compile-time system of classNamees built by
            declarations, JavaScript supports a runtime system based on a small
            number of data types representing numeric, Boolean, and string
            values. JavaScript has a prototype-based object model instead of the
            more common className-based object model. The prototype-based model
            provides dynamic inheritance; that is, what is inherited can vary
            for individual objects. JavaScript also supports functions without
            any special declarative requirements. Functions can be properties of
            objects, executing as loosely typed methods.
          </p>
          <p>
            JavaScript is a very free-form language compared to Java. You do not
            have to declare all variables, classNamees, and methods. You do not
            have to be concerned with whether methods are public, private, or
            protected, and you do not have to implement interfaces. Variables,
            parameters, and function return types are not explicitly typed.
          </p>
        </section>

        <section className="main-section" id="Hello_world">
          <h3>Hello World</h3>
          <p>
            To get started with writing JavaScript, open a browser (such as
            Google Chrome), right click and select inspect. Click the console
            tab and type your code.
          </p>

          <div className="examples">
            <p className="example-p">function greetMe(yourName) </p>
            <p className="example-p">&#123; </p>
            <p className="example-p">&nbsp; alert("Hello " + yourName); </p>
            <p className="example-p">&#125;</p>
            <p className="example-p">
              greetMe("World"); &#47;&#47; Hello World
            </p>
          </div>
        </section>

        <section className="main-section" id="Variables">
          <h3>Variables</h3>
          <p>
            You use variables as symbolic names for values in your application.
            The names of variables, called identifiers, conform to certain
            rules.
          </p>
          <p>
            A JavaScript identifier must start with a letter, underscore (_), or
            dollar sign ($); subsequent characters can also be digits (0-9).
            Because JavaScript is case sensitive, letters include the characters
            "A" through "Z" (uppercase) and the characters "a" through "z"
            (lowercase).
          </p>
          <p>
            You can use ISO 8859-1 or Unidiv letters such as å and ü in
            identifiers. You can also use the Unidiv escape sequences as
            characters in identifiers. Some examples of legal names are
            Number_hits, temp99, and _name.
          </p>
        </section>

        <section className="main-section" id="Declaring_variables">
          <h3>Declaring Variables</h3>
          <p>You can declare a variable in three ways:</p>
          <p>1. With the keyword var. For example,</p>
          <div className="examples">
            <p className="example-p">var x = 42;</p>
          </div>
          <p>
            This syntax can be used to declare both local and global variables.
            Variable declaration with var is the old JavaScript method of
            declaring variables. These variables can be assigned new values
            later on without any problem.
          </p>

          <p>2. With the keyword let. For example,</p>
          <div className="examples">
            <p className="example-p">let y = 13;</p>
          </div>
          <p>
            These variables can also be assigned new values later on without any
            problem.
          </p>

          <p>3. With the keyword const. For example,</p>
          <div className="examples">
            <p className="example-p">const name = "John";</p>
          </div>
          <p>
            These variables cannot be assigned new values later on because const
            declares a constant. A constant value is one that never changes so,
            if we try to reassign a constant variable, we will run into an
            error.
          </p>
        </section>

        <section className="main-section" id="Variable_scope">
          <h3>Variable Scope</h3>
          <p>
            When you declare a variable outside of any function, it is called a
            global variable, because it is available to any other div in the
            current document. When you declare a variable within a function, it
            is called a local variable, because it is available only within that
            function.
          </p>
          <p>
            JavaScript before ECMAScript 2015 does not have block statement
            scope; rather, a variable declared within a block is local to the
            function (or global scope) that the block resides within. For
            example the following will log 5, because the scope of x is the
            function (or global context) within which x is declared, not the
            block, which in this case is an if statement.
          </p>
          <div className="examples">
            <p className="example-p">if (true)</p>
            <p className="example-p">&#123;</p>
            <p className="example-p">&nbsp; var x = 5; </p>
            <p className="example-p">&#125;</p>
            <p className="example-p">console.log(x); &#47;&#47; 5</p>
          </div>

          <p>
            This behavior changes, when using the let declaration introduced in
            ECMAScript 2015.
          </p>
          <div className="examples">
            <p className="example-p">if (true)</p>
            <p className="example-p">&#123; </p>
            <p className="example-p"> &nbsp; let y = 5; </p>
            <p className="example-p">&#125; </p>
            <p className="example-p">
              console.log(y); &#47;&#47; ReferenceError: y is not defined
            </p>
          </div>
        </section>

        <section className="main-section" id="Global_variables">
          <h3>Global Variables</h3>
          <p>
            Global variables are in fact properties of the global object. In web
            pages the global object is window, so you can set and access global
            variables using the window.variable syntax.
          </p>
          <p>
            Consequently, you can access global variables declared in one window
            or frame from another window or frame by specifying the window or
            frame name. For example, if a variable called phoneNumber is
            declared in a document, you can refer to this variable as
            window.phoneNumber.
          </p>
        </section>

        <section className="main-section" id="Constants">
          <h3>Local Variables</h3>
          <p>
            When you use JavaScript, local variables are variables that are
            defined within functions. They have local scope, which means that
            they can only be used within the functions that define them. Since
            local variables are only recognized inside their functions,
            variables with the same name can be used in different functions.
            Local variables are created when a function starts, and deleted when
            the function is completed.
          </p>
          <div className="examples">
            <p className="example-p">&#47;&#47; THIS WILL CAUSE AN ERROR</p>
            <p className="example-p">function f() &#123;&#125;; </p>
            <p className="example-p">const f = 5;</p>
            <p className="example-p">
              &#47;&#47; THIS WILL CAUSE AN ERROR ALSO
            </p>
            <p className="example-p">function f()</p>
            <p className="example-p">&#123;</p>
            <p className="example-p"> &nbsp; const g = 5; </p>
            <p className="example-p"> &nbsp; var g;</p>
            <p className="example-p">&#125;</p>
          </div>
          <p>
            However, object attributes are not protected, so the following
            statement is executed without problems.
          </p>
          <div className="examples">
            <p className="example-p">const MY_OBJECT = &#123;</p>
            <p className="example-p">&nbsp; "key": "value"</p>
            <p className="example-p">&#125;; </p>
            <p className="example-p">MY_OBJECT.key = "otherValue";</p>
          </div>
        </section>

        <section className="main-section" id="Data_types">
          <h3>Data Types</h3>
          <p>The latest ECMAScript standard defines seven data types:</p>
          <ul>
            <li>
              Six data types that are primitives:
              <ul>
                <li className="data-types">Boolean -- true and false.</li>
                <li className="data-types">
                  null -- A special keyword denoting a null value. Because
                  JavaScript is case-sensitive, null is not the same as Null,
                  NULL, or any other variant.
                </li>
                <li className="data-types">
                  undefined -- A top-level property whose value is undefined.
                </li>
                <li className="data-types">Number -- 42 or 3.14159.</li>
                <li className="data-types">String -- "Howdy"</li>
                <li className="data-types">
                  Symbol -- (new in ECMAScript 2015). A data type whose
                  instances are unique and immutable.
                </li>
              </ul>
            </li>
            <li>and Object</li>
          </ul>
          <p>
            Although these data types are a relatively small amount, they enable
            you to perform useful functions with your applications. Objects and
            functions are the other fundamental elements in the language. You
            can think of objects as named containers for values, and functions
            as procedures that your application can perform.
          </p>
        </section>

        <section className="main-section" id="if...else_statement">
          <h3>if...else Statement</h3>
          <p>
            Use the if statement to execute a statement if a logical condition
            is true. Use the optional else clause to execute a statement if the
            condition is false. An if statement looks as follows:
          </p>
          <div className="examples">
            <p className="example-p">if (condition)</p>
            <p className="example-p">&#123; </p>
            <p className="example-p">&nbsp; statement_1;</p>
            <p className="example-p">&#125; else &#123; </p>
            <p className="example-p">&nbsp; statement_2;</p>
            <p className="example-p">&#125;</p>
          </div>
          <p>
            condition can be any expression that evaluates to true or false. See
            Boolean for an explanation of what evaluates to true and false. If
            condition evaluates to true, statement_1 is executed; otherwise,
            statement_2 is executed. statement_1 and statement_2 can be any
            statement, including further nested if statements.
          </p>
          <p>
            You may also compound the statements using else if to have multiple
            conditions tested in sequence, as follows:
          </p>
          <div className="examples">
            <p className="example-p">if (condition_1) </p>
            <p className="example-p">&#123;</p>
            <p className="example-p"> &nbsp; statement_1; </p>
            <p className="example-p">&#125; else if (condition_2) &#123;</p>
            <p className="example-p">&nbsp; statement_2;</p>
            <p className="example-p">&#125; else if (condition_n) &#123;</p>
            <p className="example-p"> &nbsp; statement_n;</p>
            <p className="example-p">&#125; else &#123; </p>
            <p className="example-p"> &nbsp; statement_last; </p>
            <p className="example-p">&#125;</p>
          </div>
          <p>
            In the case of multiple conditions only the first logical condition
            which evaluates to true will be executed. To execute multiple
            statements, group them within a block statement (&#123; ... &#125;)
            . In general, it's good practice to always use block statements,
            especially when nesting if statements:
          </p>

          <div className="examples">
            <p className="example-p"> if (condition) &#123; </p>
            <p className="example-p">
              &nbsp; statement 1 runs if condition is true;
            </p>
            <p className="example-p">
              &nbsp; statement 2 runs if condition is true;{" "}
            </p>
            <p className="example-p">&#125; else &#123;</p>
            <p className="example-p">
              &nbsp; statement 3 runs if condition is false;
            </p>
            <p className="example-p">
              &nbsp; statement 4 runs if condition is false;{" "}
            </p>
            <p className="example-p">&#125;</p>
          </div>

          <p>
            It is advisable to not use simple assignments in a conditional
            expression, because the assignment can be confused with equality
            when glancing over the div. For example, do not use the following
          </p>
          <div className="examples">
            <p className="example-p">if (x = y) &#123; </p>
            <p className="example-p">&nbsp; /* statements here */ </p>
            <p className="example-p">&#125;</p>
          </div>
          <p>
            If you need to use an assignment in a conditional expression, a
            common practice is to put additional parentheses around the
            assignment. For example:
          </p>
          <div className="examples">
            <p className="example-p">if ((x = y)) &#123; </p>
            <p className="example-p">&nbsp; /* statements here */ </p>
            <p className="example-p">&#125;</p>
          </div>
        </section>

        <section className="main-section" id="While_statement">
          <h3>while Statement</h3>
          <p>
            A while statement executes its statements as long as a specified
            condition evaluates to true. A while statement looks as follows:
          </p>
          <div className="examples">
            <p className="example-p">while (condition) &#123;</p>
            <p className="example-p"> &nbsp; statement;</p>
            <p className="example-p">&#125;</p>
          </div>
          <p>
            If the condition becomes false, statement within the loop stops
            executing and control passes to the statement following the loop.
          </p>
          <p>
            The condition test occurs before statement in the loop is executed.
            If the condition returns true, statement is executed and the
            condition is tested again. If the condition returns false, execution
            stops and control is passed to the statement following while.
          </p>
          <p>
            To execute multiple statements, use a block statement (&#123; ...
            &#125;) to group those statements.
          </p>
          <p>Example:</p>
          <p>
            The following while loop iterates as long as n is less than three:
          </p>
          <div className="examples">
            <p className="example-p">var n = 0;</p>
            <p className="example-p">var x = 0; </p>
            <p className="example-p">while (n &lt; 3) &#123;</p>
            <p className="example-p"> &nbsp; n++;</p>
            <p className="example-p"> &nbsp; x += n;</p>
            <p className="example-p">&#125;</p>
          </div>
          <p>
            With each iteration, the loop increments n and adds that value to x.
            Therefore, x and n take on the following values:
          </p>
          <ul>
            <li>After the first pass: n = 1 and x = 1</li>
            <li>After the second pass: n = 2 and x = 3</li>
            <li>After the third pass: n = 3 and x = 6</li>
          </ul>
          <p>
            After completing the third pass, the condition n &lt; 3 is no longer
            true, so the loop terminates.
          </p>
        </section>

        <section className="main-section" id="Function_declarations">
          <h3>Function declarations</h3>
          <p>
            A function definition (also called a function declaration, or
            function statement) consists of the function keyword, followed by:
          </p>
          <ul>
            <li>The name of the function.</li>
            <li>
              A list of arguments to the function, enclosed in parentheses and
              separated by commas.
            </li>
            <li>
              The JavaScript statements that define the function, enclosed in
              curly brackets, &#123; &#125;.
            </li>
          </ul>
          <p>
            For example, the following defines a simple function named square:
          </p>
          <div className="examples">
            <p className="example-p">function square(number) &#123;</p>
            <p className="example-p">&nbsp; return number * number;</p>
            <p className="example-p">&#125;</p>
          </div>
          <p>
            The function square takes one argument, called number. The function
            consists of one statement that says to return the argument of the
            function (that is, number) multiplied by itself. The return
            statement specifies the value returned by the function.
          </p>
          <div className="examples">
            <p className="example-p">return number * number;</p>
          </div>
          <p>
            Primitive parameters (such as a number) are passed to functions by
            value; the value is passed to the function, but if the function
            changes the value of the parameter, this change is not reflected
            globally or in the calling function.
          </p>
        </section>

        <section className="main-section" id="Reference">
          <h3>Reference</h3>
          <ul>
            <li>
              All the documentation in this page is taken from
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
                target="_blank"
                rel="noreferrer"
              >
                MDN
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Technical;
