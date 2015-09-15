---
layout: site
title: Source Control
body_class: source-control
---


All source is stored within the [Talis GitHub](https://github.com/talis).

Our culture around source code is one of Shared (or Collective) Code Ownership[^1], this means that we are all, as a team, collectively responsible for our code. We all own the code and in principle any one of us can make changes anywhere[^2]. 

### Working with branches

`master` is always regarded as deployable, following a green build.

For any changes, always create a branch. The branching model we use is based on GitHub Flow[^3]. We branch from `master`, implement our changes on the branch and then merge the branch back down to `master`.

Committing often is also a good practice. Every committed revision gives you a rollback position, and makes it easier for you step back through changes locally[^4].

Before merging a branch, always raise a [pull request](code-reviews.html), and make sure your changes have been reviewed by others.

If you have commited often during the lifetime of your branch, you may have many commit messages. While these are great for providing rollback positions during development, they can litter the log of the master branch. Having single commit messages for each story helps with release tracking. Consider squashing your branch to a single commit, after your code has been reviewed.   

Once your branch is merged into master, delete the branch.

#### Squashing

Squashing takes the smaller commits made during development into one single commit, ready to be merged into master.

The example  below shows a branch, STORY-002-Modify-Squash-Example, with four commits made during the development of the story.

![Four Commits on STORY-002 branch.](/images/topics/squash/squash_example_001.png){: .center-image }

To squash the four commits into one, use the git rebase command. Rebase the branch onto the master branch you are merging into with the following command:

{% highlight bash %}
$ git rebase -i master
{% endhighlight %}

Running the rebase command opens an editor which lists all your commits:

![Picking Commits During Rebase](/images/topics/squash/squash_example_002.png){: .center-image }

In the editor, leave the first commit unchanged, but change the following commits from "pick" to "squash" or just "s" as shown below.

![Selecting Commits to Squash](/images/topics/squash/squash_example_003.png){: .center-image }

Save and exit the file.

You now need to write the commit log message for the single commit being created by the squash. An editor is opened which displays the log messages for each of the squashed commits. 

![Old Commit Messages](/images/topics/squash/squash_example_004.png){: .center-image }

You can edit this to create a new commit message. Anything that is commented out will not be in the final commit message. Save and exit the file.

The git log now has only one commit:

![One Commit](/images/topics/squash/squash_example_005.png){: .center-image }

Your now ready to push your branch back upto github. However, a normal push will be rejected because your local branch and the remote branch have diverged. Perform a force push with the --force option to push the squashed branch.

{% highlight bash %}
$ git push origin STORY-002-Modify-Squash-Example --force
{% endhighlight %}

#### Commit Messages

While working on a branch, commits provide a rollback positions and commit messages reflect this. When merging, the commit message becomes part of the master branches commit log. 

The content of the commit message at that point can help with things like release tracking and linking or even automatically closing GitHub issues.

For example, using the git command:

{% highlight bash %}
git log --pretty=format:"%h | %an | %s" ^v1.0.0 v1.1.0
{% endhighlight %}

shows the commits between tags v1.0.0 and v1.1.0 i.e what is in the release v1.1.0. This can be used to update release notes and the status of stories. It is the single point of truth of what is contained in a release.

The following keywords will also close a GitHub issue automatically when the branch is merged to master.

<ul>
	<li>close</li>
	<li>closes</li>
	<li>closed</li>
	<li>fix</li>
	<li>fixes</li>
	<li>fixed</li>
	<li>resolve</li>
	<li>resolves</li>
	<li>resolved</li>
</ul>

It is therefore very important that we write good commit messages[^5], following these simple guidelines:

{% highlight bash %}
Summarize changes in around 50 characters or less.

We always include the Jira Story Number in the first line.

More detailed explanatory text, if necessary. Wrap it to 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequenses of this
change? This is the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
{% endhighlight %}

The tools we use can also be configured to help us adhere to this, for example, if you use `Vim` for editing your commit messages you can configure it to wrap text correctly by enabling the indent plugin in your `~/.vimrc` file:

{% highlight bash %}
filetype indent plugin on
{% endhighlight %}



[^1]: [Engineering Culture Series: Code ownership](https://code.facebook.com/posts/263824650408138/engineering-culture-series-code-ownership/)
[^2]: [Collective Code Ownership](http://www.jamesshore.com/Agile-Book/collective_code_ownership.html)
[^3]: [Github Flow](https://guides.github.com/introduction/flow/)
[^4]: [Commit Often, Perfect Later, Publish Once](https://sethrobertson.github.io/GitBestPractices/)
[^5]: [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/)