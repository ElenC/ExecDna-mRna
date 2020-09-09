$(".dna").change(function(){
    if(this.value == 'A'){
        return $('.rna').val('U')  
    }if(this.value  == 'G'){
        return $('.rna2').val('C')
    }if(this.value == 'T'){
        return $('.rna3').val('A')
    }if(this.value == 'C'){
        return $('.rna4').val('G')
    }else{
        alert('Não é uma Molécula de DNA')
    }
})