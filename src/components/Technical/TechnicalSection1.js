import React from "react";
import {
  Box,
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

const TechnicalCard1 = () => {
  return (
    <Box>
      <Card>
        <Typography variant="h2">JavaScript Documentation</Typography>
        <Typography variant="h4">Introduction</Typography>
        <Typography>
          JavaScript is a cross-platform, object-oriented scripting language. It
          is a small and lightweight language. Inside a host environment (for
          example, a web browser), JavaScript can be connected to the objects of
          its environment to provide programmatic control over them.
        </Typography>
        <Typography>
          JavaScript contains a standard library of objects, such as Array,
          Date, and Math, and a core set of language elements such as operators,
          control structures, and statements. Core JavaScript can be extended
          for a variety of purposes by supplementing it with additional objects;
          for example:
        </Typography>
        <MenuList>
          <MenuItem>
            Client-side JavaScript extends the core language by supplying
            objects to control a browser and its Document Object Model (DOM).
            For example, client-side extensions allow an application to place
            elements on an HTML form and respond to user events such as mouse
            clicks, form input, and page navigation.
          </MenuItem>
          <MenuItem>
            Server-side JavaScript extends the core language by supplying
            objects relevant to running JavaScript on a server. For example,
            server-side extensions allow an application to communicate with a
            database, provide continuity of information from one invocation to
            another of the application, or perform file manipulations on a
            server.
          </MenuItem>
        </MenuList>
      </Card>

      <Card>
        <Typography variant="h4">What You Should Already Know</Typography>
        <Typography>
          This guide assumes you have the following basic background:
        </Typography>
        <MenuList>
          <MenuItem>
            A general understanding of the Internet and the World Wide Web
            (WWW).
          </MenuItem>
          <MenuItem>
            Good working knowledge of HyperText Markup Language (HTML).
          </MenuItem>
        </MenuList>
      </Card>

      <Card>
        <Typography variant="h4">JavaScript and Java</Typography>
        <Typography>
          JavaScript and Java are similar in some ways but fundamentally
          different in some others. The JavaScript language resembles Java but
          does not have Java's static typing and strong type checking.
          JavaScript follows most Java expression syntax, naming conventions and
          basic control-flow constructs which was the reason why it was renamed
          from LiveScript to JavaScript.
        </Typography>
        <Typography>
          In contrast to Java's compile-time system of classNamees built by
          declarations, JavaScript supports a runtime system based on a small
          number of data types representing numeric, Boolean, and string values.
          JavaScript has a prototype-based object model instead of the more
          common className-based object model. The prototype-based model
          provides dynamic inheritance; that is, what is inherited can vary for
          individual objects. JavaScript also supports functions without any
          special declarative requirements. Functions can be properties of
          objects, executing as loosely typed methods.
        </Typography>
        <Typography>
          JavaScript is a very free-form language compared to Java. You do not
          have to declare all variables, classNamees, and methods. You do not
          have to be concerned with whether methods are public, private, or
          protected, and you do not have to implement interfaces. Variables,
          parameters, and function return types are not explicitly typed.
        </Typography>
      </Card>
    </Box>
  );
};

export default TechnicalCard1;
