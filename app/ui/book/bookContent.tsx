import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Image from "next/image";
import Divider from '@mui/material/Divider';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
interface BookContentProps {
    open: boolean;
    toggleDrawer: (open: boolean) => void;
}

export default function BookContent({ open, toggleDrawer }:BookContentProps) {

    return (
        <React.Fragment >
            <Dialog
                fullScreen
                open={open}
                onClose={() => toggleDrawer(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={"overflow-y-auto bg-gray-900 px-10"}
            >
                <DialogTitle id="alert-dialog-title" className ="bg-gray-900 text-amber-100">
                    {"Time Trekker"}
                </DialogTitle>
                <DialogContent className={"bg-gray-900 text-amber-100 px-44"}>
                    <div className={"flex py-12"}>
                        <Image src={"/time_trekker.webp"} alt={"time_trekker"} className={"rounded-md bg-gradient-to-tr from-gray-700 to-gray-500"} width={128} height={128}></Image>
                        <div className={"flex-col px-5"}>
                            <Typography variant={"h4"}>
                                {/*name*/}
                                Time Trekker
                            </Typography>
                            <Typography variant={"body2"}>
                                {/*description*/}
                                A Fontainian science fiction novel published by The Steambird.
                                It tells the story of an engineer&apos;s travels using a time machine.
                            </Typography>
                        </div>

                    </div>
                    <Typography variant={"h5"} >
                        Vol. 1
                    {/*volume number  */}
                    </Typography>
                    <Divider className={"bg-gray-500 h-[1.5px] my-2"}></Divider>
                    <DialogContentText id="alert-dialog-description" className={"bg-gray-900 text-amber-50"}>
                        {/*content*/}
                        This is a story from many years ago. After the evening banquet, Ms. Aviva (who today would be Lady Nenonen) was, as always, theatrically grousing to us about the all-too-swift march of science. Though her grasp on engineering is even less firm than her knowledge of Watatsumi Island&apos;s soil quality (and of course, she knows nothing about the latter either), but self-proclaimed interest in engineering was in vogue amongst some ladies and gentlemen at the time.
                        <br/>
                        <br/>
                        &quot;Our ancestors had already conquered this land thousands of years ago,&quot; she said as she cleared her throat, twirling her jade-plumed and blue-gem-encrusted folding fan while endeavoring in vain to wear a visage of despondency. &quot;And a few hundred years ago, they conquered the oceans with ease using new diving equipment. Today, some noble young folk have suddenly got it in their heads to use a so-termed gravimeter to break free from the earth&apos;s shackles and conquer the skies — and surely, I fear, their dream may yet become reality in the near future.&quot;
                        <br/>
                        <br/>
                        &quot;Indeed, it is just as you say. Humans — ah, what a mighty and energetic species, with such great wisdom! No matter the circumstances, humans ever seek to change their living conditions with unimaginable passion,&quot; The Steambird editor immediately opined. &quot;In truth, when it comes to mechanical engineering and theory, humanity is already on par with the creator. They have conquered most of the natural world, and by their will, they can shape this world anew.&quot;
                        <br/>
                        <br/>
                        &quot;Ah, that&apos;s... not what I meant to say,&quot; Ms. Aviva said with an affected sigh. &quot;Those distant and dark unknown continents, those ruins hidden deep beneath the seas, all that romantic exploration and trailblazing — such great achievements, that which has put the glorious achievements of our sciences and reasoning on full display — have all but become lost to our civilization. Our forebears reached too high and achieved too much, leaving too little for us to explore or conquer. Could there be a sadder fate to befall those ladies and gentlemen amongst us who were born to crave the exploration of the unknown?&quot;
                        <br/>
                        <br/>
                        Here, her pretentious invocation of the legendary King Argeadai&apos;s words seemed an attempt to prove how truly this state of affairs hurt her. However, everyone simply sat around lazily, at most giving polite nods. Lady Elle lightly yawned.
                        <br/>
                        <br/>
                        Seeing how no one answered, Ms. Aviva&apos;s enthusiasm faded and she proceeded to switch the topic to next week&apos;s ball. This was, evidently, a more popular topic, and the stiff atmosphere once again grew lively. Monsieur Ratar was just about to regale us with a tale he had heard in Sumeru regarding a tower, a mage, and a glass ball, but before he could begin, Mr. Ciric, who had remained silent till now, interrupted.
                        <br/>
                        <br/>
                        &quot;Good Ms. Aviva, the things you said certainly left an impression on me.&quot; He lit a cigarette. &quot;However, you need not worry. There is still one space that has yet to be subdued by humanity — indeed, if the required techniques do not emerge, I fear it will never be.&quot;
                        <br/>
                        <br/>
                        &quot;Where&apos;s that?&quot; Ratar asked, a sullen look on his face. He had been so very confident about his monkey story, after all.
                        <br/>
                        <br/>
                        &quot;Time.&quot;
                        <br/>
                        <br/>
                        The room fell silent momentarily before all present broke out into laughter.
                        <br/>
                        <br/>
                        &quot;What preposterous talk!&quot; Dr. Reinier declared, trying not to laugh. &quot;Firstly, how can time be considered a part of space?&quot;
                        <br/>
                        <br/>
                        &quot;Can you separate yourself from time and exist independently in space alone?&quot;
                        <br/>
                        <br/>
                        &quot;What do you mean?&quot;
                        <br/>
                        <br/>
                        &quot;I mean to, at this moment, still be speaking to me, and in the next disappear without a trace. Is this possible?&quot; He waited for a moment, as if waiting for the others to think. &quot;Obviously, anyone with the capacity for rigorous thought would know for certain that much like length, width, and height, time is also a dimension of space. As such, it is a part of nature, and can thus be conquered.&quot;
                        <br/>
                        <br/>
                        &quot;Utterly preposterous...&quot; The doctor muttered, but did not refute the statement.
                        <br/>
                        <br/>
                        &quot;I have been involved in research of this sort for some time,&quot; he continued, &quot;and I have come up with a machine that can allow people to travel through time as they please. This machine will be ready in two months. At that time, Ms. Aviva, I invite you and all the ladies and gentlemen present here to my workshop, to bear witness to humanity&apos;s next great achievement: the conquest of time.&quot;
                        <br/>
                        <br/>
                        Ms. Aviva did not speak. In fact, from her expression, our noble friend did not understand Mr. Ciric&apos;s words at all.
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={"bg-gray-700 text-amber-100 h-[40px]"}>
                    <Button onClick={() => toggleDrawer(false)} autoFocus>
                        Finished
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}