import React, { useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

export default function TextEditor({ value, onChange }) {
    const editor = useRef(null);

    const config = useMemo(() => ({
        readonly: false,
        toolbarSticky: true,
        askBeforePasteHTML: false,
        toolbarAdaptive: true,
        buttons: [ 'bold',  'italic','underline', '|','ul','ol','|', 'font', 'fontsize' ],
    }), []);

    return (
        <JoditEditor
            ref={editor}
            value={value}
            config={config}
            tabIndex={1}
            onChange={newContent => onChange(newContent)}
             className="rounded-lg border border-gray-300"
        />
    );
}
