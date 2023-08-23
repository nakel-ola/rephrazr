import { Header, ResultCard, TextEditorCard } from "@/features/paraphraser";
import Head from "next/head";
import React, { Fragment, useState } from "react";

export default function Paraphraser() {
  const [active, setActive] = useState(0);

  const [input, setInput] = useState("");
  return (
    <Fragment>
      <Head>
        <title>Paraphraser | Rephrazr</title>
      </Head>

      <div className="flex justify-center w-full py-5 ">
        <div className="mx-5 border-2 border-black  rounded-xl shadow-[3px_3px_0px_black] bg-white w-[95%] lg:w-[85%] divide-y-[2px] divide-black overflow-hidden">
          <Header active={active} setActive={setActive} />

          <div className="flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-black lg:h-[450px] ">
            <TextEditorCard
              onBtnClick={() => {}}
              value={input}
              onChange={setInput}
            />
            <ResultCard text={text} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

const text = `Yes, there are several VS Code extensions that can help you with syntax highlighting and other features for React code embedded within strings. One popular extension is "Highlight JS and TS in JSX/HTML" which provides syntax highlighting for JavaScript and TypeScript within JSX and HTML code. 

To use this extension, follow these steps: 

Open your VS Code editor.
Go to the Extensions view by clicking on the Extensions icon in the sidebar or pressing Ctrl+Shift+X.
Search for "Highlight JS and TS in JSX/HTML" in the search bar.
Install the extension authored by "Fuat Coskun".
Once installed, the extension should automatically highlight the JavaScript and TypeScript code within your JSX strings.
Remember to set the appropriate language mode for the file you're working on. You can do this by clicking on the language mode in the bottom right corner of the editor and selecting "JavaScript React" or "TypeScript React" depending on your code. 

Please note that while this extension can help with syntax highlighting, if you're dealing with complex React components or code logic within strings, it might be a better practice to separate the components into their own separate files for better organization, maintainability, and the full benefits of code highlighting and auto-completion.




User
extension does not exist 
ChatGPT
I apologize for the confusion. It seems I provided incorrect information regarding the extension. As of my last update in September 2021, there might not be a specific extension that highlights React code within strings. However, you can still improve your workflow using some general extensions and techniques. 

Here's what you can do: 

ESLint and Prettier: Install the ESLint and Prettier extensions. These tools help with code formatting and catching syntax errors. They won't directly highlight React code within strings, but they will improve your overall code quality. 

Language Mode: Make sure that you set the language mode for the file correctly. In the bottom right corner of the VS Code window, you can click on the language mode and select "JavaScript React" or "TypeScript React" to get better syntax highlighting and auto-completion for React code.

Embedded Languages: VS Code supports embedded languages. While it won't provide perfect syntax highlighting, you can use the language identifier comment to tell VS Code what language you're embedding. For example:`;
