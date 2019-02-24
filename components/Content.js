import * as Pages from './Pages';

export default function content(state){
    const page = state[state.active];

    return `
<div id=content>
    <div class="container">
    ${Pages[page.body](state)}
    </div>
</div>
`;
}
