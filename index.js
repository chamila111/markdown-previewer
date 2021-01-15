
marked.setOptions({
  breaks: true
});
const renderer = new marked.Renderer();

function App(){
  const [text,setText] = React.useState("");
  return (
    <div className="text-center px-4">
    <h1>markdown preview</h1>
    <textarea value={text} rows="10" className="textarea" name="text" id="text"
    onChange={e => setText(e.target.value)}></textarea>
    <h3 className="mt-3">output</h3>
    <Preview markdown={text}/>
    </div>
  );
}


const Preview = ({markdown}) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer })
      }}
      id='preview'
    />
  );
};


ReactDOM.render(<App/>,document.getElementById('app'))
