import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InterviewAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What is the purpose of useEffect in React? 🤔
        </AccordionTrigger>
        <AccordionContent>
          useEffect is a hook that allows you to perform side effects in your
          functional components. Side effects can include data fetching,
          subscriptions, or manually changing the DOM. It&apos;s similar to
          componentDidMount, componentDidUpdate, and componentWillUnmount
          lifecycle methods in class components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          What parameters does useEffect accept? 📜
        </AccordionTrigger>
        <AccordionContent>
          useEffect accepts two parameters: Effect function: A function that
          contains the side-effect logic. This function can optionally return a
          cleanup function. Dependency array (optional): An array of
          dependencies that determine when the effect should run. If any value
          in this array changes between renders, the effect function will
          re-run.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          What happens if the dependency array is empty? 🌀
        </AccordionTrigger>
        <AccordionContent>
          If the dependency array is empty, the effect function will only run
          once, after the initial render. This is similar to componentDidMount
          in class components. It won&apos;t run on subsequent re-renders unless
          the component is unmounted and then remounted.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
