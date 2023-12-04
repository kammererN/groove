// IGNORE THIS FILE FOR RIGHT NOW. CURRENTLY A RELIC OF THE TEMPLATE
// IGNORE THIS FILE FOR RIGHT NOW. CURRENTLY A RELIC OF THE TEMPLATE

$(document).ready(function() {
    $('#build').click(function() {
                var instructions = $('#instructions').val();
                var context = $('#context').val();
                var boilerplate = 'Follow the instructions below.\nUtilize the context contained within triple parentheses.';
                var template = `${boilerplate}\n\n[Instructions]:\n${instructions}\n\n[Context]\n"""\n${context}\n"""`;
                console.log(template);
                $('#markdown').text(template);
                $('#instructions').val('');
                $('#context').val('');
            });
            $('#copyPrompt').click(function() {
                var markdown = $('#markdown').text();
                navigator.clipboard.writeText(markdown);
                console.log('Prompt copied to clipboard');
            });
            $('#query').click(function() {
                var markdown = $('#markdown').text();
                navigator.clipboard.writeText(markdown);
                window.open("https://chat.openai.com/?model=gpt-4", '_blank');
                console.log('Opening ChatGPTv4');
            });
            $('#openGPTv35').click(function(e){
                e.preventDefault();
                var markdown = $('#markdown').text();
                navigator.clipboard.writeText(markdown);
                window.open("https://chat.openai.com/", '_blank');
                console.log('Opening ChatGPTv3.5');

            });
            $('#searchQuizlet').click(function() {
                var quizQuestion = $('#quizQuestion').val();
                var url = `https://www.google.com/search?q=site:quizlet.com+${encodeURIComponent(quizQuestion)}`;
                window.open(url, '_blank');
                $('#quizQuestion').val('');
                console.log('Searching Quizlet');
            });
            $('#searchStackExchange').click(function() {
                var stackQuestion = $('#stackQuestion').val();
                var url = `https://www.google.com/search?q=site:stackexchange.com+${encodeURIComponent(stackQuestion)}`;
                window.open(url, '_blank');
                $('#stackQuestion').val('');
                console.log('Searching Stack Exchange');
            });
        });