/*
Nested JSX must return a single element.

This one parent element would wrap all of the other levels of nested elements.

<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>

Invalid JSX:

<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
*/
const JSX = ( <div>
                <h1>
                    Hellow JSX
                </h1>
                <p>
                    This is a paragraph in my JSX p element. 
                </p>
                <ul>
                    <li>
                        List 1
                    </li>
                    <li>
                        List 2
                    </li>
                    <li>
                        List 3
                    </li>
                </ul>
            </div>
);
