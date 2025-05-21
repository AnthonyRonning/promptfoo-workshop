# Promptfoo Workshop

This repository contains starter materials for a promptfoo workshop to help you evaluate and improve your LLM prompts.

## Getting Started

1. Make sure you have Node.js installed (version 18+)
2. Set up your OpenAI API key:
   ```bash
   export OPENAI_API_KEY=your-api-key
   ```

## Running Evaluations

Each evaluation can be run with the `npx promptfoo eval` command and a specific configuration file. After running an evaluation, view the results with `npx promptfoo view`.

Here are the specific commands for each evaluation:

1. **Basic Tweet Generation**:
   ```bash
   npx promptfoo eval -c promptfooconfig.yaml
   ```

2. **Customer Service Responses**:
   ```bash
   npx promptfoo eval -c customer-service-eval.yaml
   ```

3. **Content Generation**:
   ```bash
   npx promptfoo eval -c content-generation-eval.yaml
   ```

4. **Code Generation**:
   ```bash
   npx promptfoo eval -c code-generation-eval.yaml
   ```

5. **Security Red-Teaming**:
   ```bash
   npx promptfoo eval -c security-eval.yaml
   ```

6. **Chatbot Response Evaluation**:
   ```bash
   npx promptfoo eval -c chat-response-eval.yaml
   ```

7. **RAG System Evaluation**:
   ```bash
   npx promptfoo eval -c rag-eval.yaml
   ```

8. **Sentiment Analysis**:
   ```bash
   npx promptfoo eval -c sentiment-analysis-eval.yaml
   ```

9. **IMDB Sentiment Analysis with CSV Data**:
   ```bash
   npx promptfoo eval -c imdb-csv-eval.yaml
   ```

After running any evaluation, view the results in your browser:
```bash
npx promptfoo view
```

## Workshop Evaluation Examples

This repository includes several evaluation examples for different use cases:

1. **Basic Tweet Generation** (promptfooconfig.yaml)
   - Evaluates tweet generation across different prompts and topics
   - Tests for relevance, conciseness, and engagement

2. **Customer Service Responses** (customer-service-eval.yaml)
   - Evaluates different tones for customer service responses
   - Tests for professionalism, empathy, and solution-orientation

3. **Content Generation** (content-generation-eval.yaml)
   - Evaluates blog post introductions with various hooks
   - Tests for readability, engagement, and topic relevance

4. **Code Generation** (code-generation-eval.yaml)
   - Evaluates code generation across different programming languages
   - Tests for correctness, efficiency, and best practices

5. **Security Red-Teaming** (security-eval.yaml)
   - Tests LLM responses to potentially harmful requests
   - Evaluates refusal strategies and alternative suggestions

6. **Chatbot Response Evaluation** (chat-response-eval.yaml)
   - Tests different chatbot personas on various query types
   - Evaluates empathy, factual accuracy, and appropriate handling of scenarios

7. **RAG System Evaluation** (rag-eval.yaml)
   - Tests different RAG prompt structures
   - Evaluates groundedness, hallucination avoidance, and handling of information gaps

8. **Sentiment Analysis** (sentiment-analysis-eval.yaml)
   - Evaluates movie review sentiment classification accuracy
   - Tests the model's ability to correctly identify positive and negative sentiment

9. **IMDB Sentiment Analysis with CSV Data** (imdb-csv-eval.yaml)
   - Uses a custom JS evaluator to work with the original IMDB CSV format
   - Demonstrates how to use custom evaluators with existing datasets without modification

## Running Multiple Evaluations

You can run multiple evaluations at once with:

```bash
npx promptfoo eval -c promptfooconfig.yaml -c customer-service-eval.yaml
```

Or run all evaluations with:

```bash
npx promptfoo eval -c *.yaml
```

## Customizing Evaluations

To create your own evaluation:

1. Copy one of the existing YAML files as a starting point
2. Modify the prompts, providers, and test cases to suit your needs
3. Run the evaluation with `npx promptfoo eval -c your-custom-eval.yaml`

## Learning More

Check out the official promptfoo documentation for more information:
- [Getting Started](https://www.promptfoo.dev/docs/getting-started)
- [Configuration Guide](https://www.promptfoo.dev/docs/configuration/guide)
- [Assertions Reference](https://www.promptfoo.dev/docs/configuration/expected-outputs)
- [Red-Teaming Guide](https://www.promptfoo.dev/docs/red-teaming)

## Official Examples

For more examples, check the [official promptfoo examples repository](https://github.com/promptfoo/promptfoo/tree/main/examples), which contains specialized evaluations for:

- Model comparisons (claude-vs-gpt, mistral-llama-comparison)
- Multimodal testing (claude-vision)
- Structured outputs (json-output, structured-outputs-config)
- SQL validation
- Summarization
- Tool use evaluation