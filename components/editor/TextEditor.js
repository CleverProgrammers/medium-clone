import EditorTheme from './themes/EditorTheme'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import TreeViewPlugin from './plugins/TreeViewPlugin'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'
import { ListItemNode, ListNode } from '@lexical/list'
import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { TRANSFORMERS } from '@lexical/markdown'

import ListMaxIndentLevelPlugin from './plugins/ListMaxIndentLevelPlugin'
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import AutoLinkPlugin from './plugins/AutoLinkPlugin'

// import './editorStyles.css'

const Placeholder = () => {
  return <div className='editor-placeholder'>Enter some rich text...</div>
}

const onChange = editorState => {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot()
    const selection = $getSelection()

    console.log(root, selection)
  })
}

const editorConfig = {
  // The editor theme
  theme: EditorTheme,
  // Handling of errors during update
  onError(error) {
    throw error
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
}

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className='editor-container'>
        <ToolbarPlugin />
        <div className='editor-inner'>
          <RichTextPlugin
            contentEditable={<ContentEditable className='editor-input' />}
            placeholder={<Placeholder />}
          />
          <HistoryPlugin />
          <OnChangePlugin onChange={onChange} />
          {/* <TreeViewPlugin /> */}
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  )
}

// import { $getRoot, $getSelection } from 'lexical'
// import { useEffect } from 'react'

// import { LexicalComposer } from '@lexical/react/LexicalComposer'
// import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
// import { ContentEditable } from '@lexical/react/LexicalContentEditable'
// import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
// import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
// import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
// import { RichTextPlugin } from '@lexical/rich-text'

// const styles = {
//   ltr: `text-start`,
//   rtl: `text-end`,
//   editorPlaceholder: `text-[#999] overflow-hidden absolute top-[1rem] left-[1rem]`,
//   editorParagraph: ``,
// }

// // const theme = {
// //   // Theme styling goes here
// //   // ...

// //   ltr: 'ltr',
// //   rtl: 'rtl',
// //   placeholder: 'editorPlaceholder',
// //   paragraph: 'editorParagraph',
// // }

// const exampleTheme = {
//   ltr: 'ltr',
//   rtl: 'rtl',
//   placeholder: 'editor-placeholder',
//   paragraph: 'editor-paragraph',
//   quote: 'editor-quote',
//   heading: {
//     h1: 'editor-heading-h1',
//     h2: 'editor-heading-h2',
//     h3: 'editor-heading-h3',
//     h4: 'editor-heading-h4',
//     h5: 'editor-heading-h5',
//     h6: 'editor-heading-h6',
//   },
//   list: {
//     nested: {
//       listitem: 'editor-nested-listitem',
//     },
//     ol: 'editor-list-ol',
//     ul: 'editor-list-ul',
//     listitem: 'editor-listitem',
//   },
//   image: 'editor-image',
//   link: 'editor-link',
//   text: {
//     bold: 'editor-text-bold',
//     italic: 'editor-text-italic',
//     overflowed: 'editor-text-overflowed',
//     hashtag: 'editor-text-hashtag',
//     underline: 'editor-text-underline',
//     strikethrough: 'editor-text-strikethrough',
//     underlineStrikethrough: 'editor-text-underlineStrikethrough',
//     code: 'editor-text-code',
//   },
//   code: 'editor-code',
//   codeHighlight: {
//     atrule: 'editor-tokenAttr',
//     attr: 'editor-tokenAttr',
//     boolean: 'editor-tokenProperty',
//     builtin: 'editor-tokenSelector',
//     cdata: 'editor-tokenComment',
//     char: 'editor-tokenSelector',
//     class: 'editor-tokenFunction',
//     'class-name': 'editor-tokenFunction',
//     comment: 'editor-tokenComment',
//     constant: 'editor-tokenProperty',
//     deleted: 'editor-tokenProperty',
//     doctype: 'editor-tokenComment',
//     entity: 'editor-tokenOperator',
//     function: 'editor-tokenFunction',
//     important: 'editor-tokenVariable',
//     inserted: 'editor-tokenSelector',
//     keyword: 'editor-tokenAttr',
//     namespace: 'editor-tokenVariable',
//     number: 'editor-tokenProperty',
//     operator: 'editor-tokenOperator',
//     prolog: 'editor-tokenComment',
//     property: 'editor-tokenProperty',
//     punctuation: 'editor-tokenPunctuation',
//     regex: 'editor-tokenVariable',
//     selector: 'editor-tokenSelector',
//     string: 'editor-tokenSelector',
//     symbol: 'editor-tokenProperty',
//     tag: 'editor-tokenProperty',
//     url: 'editor-tokenOperator',
//     variable: 'editor-tokenVariable',
//   },
// }

// // When the editor changes, you can get notified via the
// // LexicalOnChangePlugin!
// function onChange(editorState) {
//   editorState.read(() => {
//     // Read the contents of the EditorState here.
//     const root = $getRoot()
//     const selection = $getSelection()

//     // console.log(root, selection)
//   })
// }

// // Lexical React plugins are React components, which makes them
// // highly composable. Furthermore, you can lazy load plugins if
// // desired, so you don't pay the cost for plugins until you
// // actually use them.
// function MyCustomAutoFocusPlugin() {
//   const [editor] = useLexicalComposerContext()

//   useEffect(() => {
//     // Focus the editor when the effect fires!
//     editor.focus()
//   }, [editor])

//   return null
// }

// // Catch any errors that occur during Lexical updates and log them
// // or throw them as needed. If you don't throw them, Lexical will
// // try to recover gracefully without losing user data.
// function onError(error) {
//   console.error(error)
// }

// const TextEditor = () => {
//   const initialConfig = {
//     namespace: 'MediumEditor',
//     exampleTheme,
//     onError,
//   }

//   return (
//     <LexicalComposer initialConfig={initialConfig}>
//       <PlainTextPlugin
//         contentEditable={<ContentEditable />}
//         placeholder={<div>Enter some text...</div>}
//       />
//       <OnChangePlugin onChange={onChange} />
//       <HistoryPlugin />
//       <MyCustomAutoFocusPlugin />
//     </LexicalComposer>
//   )
// }

// export default TextEditor
