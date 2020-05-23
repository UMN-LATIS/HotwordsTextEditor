<template>
    <ckeditor :editor="editor" :value="editorData" @input="$emit('update:editorData', $event)" :config="editorConfig"></ckeditor>
</template>

<script>
    // ⚠️ NOTE: We don't use @ckeditor/ckeditor5-build-classic any more!
    // Since we're building CKEditor from source, we use the source version of ClassicEditor.
    import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

    import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
    import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
    import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
    import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
    import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
    import HotwordPlugin from './hotword';
    import GFMDataProcessor from '@ckeditor/ckeditor5-markdown-gfm/src/gfmdataprocessor';
    import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
    import List from '@ckeditor/ckeditor5-list/src/list.js';
    import CKEditor from '@ckeditor/ckeditor5-vue';

    function Markdown( editor ) {
        editor.data.processor = new GFMDataProcessor( editor.editing.view.document );
    }
    

    export default {
        props: ["editorData"],
        components: {
            'ckeditor': CKEditor.component,
        },
        data() {
            return {
                editor: ClassicEditor,
                // editorData: '',
                editorConfig: {
                    plugins: [
                        Markdown,
                        EssentialsPlugin,
                        BoldPlugin,
                        ItalicPlugin,
                        LinkPlugin,
                        ParagraphPlugin,
                        HotwordPlugin,
                        BlockQuote,
                        List
                    ],
                    toolbar: {
                        items: [
                            'bold',
                            'italic',
                            'hotword',
                            'bulletedList',
                            'numberedList',
                            'blockquote',
                            'link',
                            'undo',
                            'redo',

                        ]
                    }
                }
            };
        }
    };
</script>