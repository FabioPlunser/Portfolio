<script lang="ts">
    export let Inputlength: number = 2;
    export let OutputLength: number = 1;
    let KVDiagramm: boolean = true;
    if(OutputLength > 1){
        KVDiagramm = false;
    }
    // truthtable [row][column]
    let truthTable: number[][] = [];
    $: {
        truthTable = [];
        for (let i = 0; i < Math.pow(2, Inputlength); i++) {
            let row: number[] = [];
            for (let j = 0; j < Inputlength; j++) {
                row.push(((i >> j) & 1));
            }
            truthTable.push(row);
        }
    }
    // $: console.log(truthTable);
    let outputTable: number[] = [];
    $: {
        for (let i = 0; i < Math.pow(2, Inputlength); i++) {
        outputTable.push(0);
        }
    }
    
    let CCNF: string = "y=";
    let CDNF: string = "y=";

    function handleOutput(rownumber: number){
        if(outputTable[rownumber] == 0){
            outputTable[rownumber] = 1;
        }
        else{
            outputTable[rownumber] = 0;
        }
    }

    $:{
        CCNF = "y=";
        CDNF = "y=";
        for(let i = 0; i < Math.pow(2, Inputlength); i++){
            if(outputTable[i] == 0){
                CCNF += "(";
                for(let j = 0; j < Inputlength; j++){
                    if(truthTable[i][j] == 1){
                        CCNF += `<span>x<sub>${j}</sub><span>`;
                    }
                    else{
                        CCNF += `<span class=\"overline\">x</span><sub>${j}</sub>`;
                    }
                    if(j != Inputlength - 1){
                        CCNF += "<span>∨<span>";
                    }
                }
                CCNF += ")";
                if(i != Math.pow(2, Inputlength) - 1){
                    CCNF += "<span>∧<span>";
                }
            }
            if(outputTable[i] == 1){
                CDNF += "(";
                for(let j = 0; j < Inputlength; j++){
                    if(truthTable[i][j] == 1){
                        CDNF += `<span>x<sub>${j}</sub><span>`;
                    }
                    else{
                        CDNF += `<span class=\"overline\">x</span><sub>${j}</sub>`;
                    }
                    if(j != Inputlength - 1){
                        CDNF += "<span>∧<span>";
                    }
                }
                CDNF += ")";
                if(i != Math.pow(2, Inputlength) - 1){
                    CDNF += "<span>∨<span>";
                }
            }

        }
    } 
</script>

<div class="rtl-grid overflow-x-auto m-24">
    <table class="rtl-grid table table-zebra w-full"> 
      <thead>
        <tr>
            <th>Y</th>

            {#each [...Array(Inputlength).keys()] as i}
                <th>x_{i}</th>
            {/each}

        </tr>
      </thead>
      <tbody>
        {#each [...Array(2**Inputlength).keys()] as rowNumber}
            <tr>
                {#each [...Array(OutputLength).keys()] as columnNumber}
                    <td><button class="hover:underline hover:text-gray-500"on:click={()=>{handleOutput(rowNumber)}}>{outputTable[rowNumber]}</button></td>
                {/each}
                {#each [...Array(Inputlength).keys()] as columnNumber}
                    <td>{truthTable[rowNumber][columnNumber]}</td>
                {/each}
                
            </tr>
        {/each}
      </tbody>
    </table>
</div>

<div class="container text-2xl">
    <div class="container">
        <h1>CDNF</h1>
        <h1>{@html CDNF}</h1>
    </div>
    <div class="container">
        <h1>CCNF</h1>
        <h1>{@html CCNF}</h1>
    </div>
</div>


<br class="mb-96"/>

<style>
    .rtl-grid {
        direction: rtl;
    }
    .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    /* background-color: #2196F3; */
    /* padding: 10px; */
    }
    .grid-item {
    /* background-color: rgba(255, 255, 255, 0.8); */
    /* border: 1px solid rgba(0, 0, 0, 0.8); */
    /* padding: 20px; */
    /* font-size: 30px; */
    text-align: center;
    }
</style>